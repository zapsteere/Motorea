import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  // preserveOrder: false — стандарт
});

const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);

const toGBP = (n) => {
  const num = Number(String(n ?? "").replace(/[^\d.]/g, ""));
  if (!isFinite(num) || !num) return "";
  return `£${num.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;
};

const cleanTransmission = (t) => {
  if (!t) return "";
  // "0 Speed Manual" -> "Manual", "8 Speed Automatic" -> "Automatic"
  const m = String(t).match(/(manual|automatic|auto)/i);
  return m
    ? m[0].toLowerCase() === "auto"
      ? "Automatic"
      : m[0][0].toUpperCase() + m[0].slice(1).toLowerCase()
    : String(t);
};

export async function fetchAndNormalizeVehicles(feedUrl) {
  const res = await fetch(feedUrl, { cache: "no-store" });
  if (!res.ok)
    throw new Error(`Feed fetch failed: ${res.status} ${res.statusText}`);
  const xml = await res.text();
  const parsed = parser.parse(xml);

  // Точный путь для твоего фида:
  // group -> branch -> vehicles -> vehicle (массив)
  const branch =
    parsed?.group?.branch ||
    parsed?.Group?.Branch ||
    parsed?.group?.Branch ||
    parsed?.Group?.branch;

  const vehiclesNode = branch?.vehicles || branch?.Vehicles;

  const vehicles = toArray(
    vehiclesNode?.vehicle || vehiclesNode?.Vehicle || []
  );

  // Можно достать общие контакты (если пригодятся в UI)
  const org = {
    groupId: parsed?.group?.["@_id"],
    groupName: parsed?.group?.["@_name"],
    branchId: branch?.["@_id"],
    branchName: branch?.["@_name"],
    email: branch?.email || "",
    telephone: branch?.telephone || "",
    address: {
      line1: branch?.address?.line_1 || "",
      line2: branch?.address?.line_2 || "",
      city: branch?.address?.city || "",
      county: branch?.address?.county || "",
      postcode: branch?.address?.postcode || "",
    },
  };

  const items = vehicles.map((v, idx) => {
    const id = v?.["@_id"] || v?.id || `veh-${idx}`;
    const make = v.make || "";
    const model = v.model || "";
    const variant = v.variant || "";
    const year = v.year || "";
    const mileage = v.mileage || "";
    const fuel = v.fuel || "";
    const transmission = cleanTransmission(v.transmission || "");
    const body = v.body_plan || ""; // именно body_plan в твоём XML
    const color = v.colour || ""; // colour (британская орфография)
    const engine = v.engine_size || ""; // куб. см
    const mpg = v.mpg || "";
    const co2 = v.co2 || "";
    const bhp = v.bhp || "";

    const price = toGBP(v.price);

    // Картинки: images -> image[]
    const images = toArray(v?.images?.image).map(String).filter(Boolean);

    const title = [year, make, model, variant].filter(Boolean).join(" ").trim();

    const description =
      v.description ||
      [
        mileage && `${mileage} miles`,
        transmission,
        fuel,
        body && `${body}`,
        color && `Color: ${color}`,
      ]
        .filter(Boolean)
        .join(" • ");

    // Бейдж на скидку (если будет previous/old price — добавь и сравни)
    const badge = undefined;

    // Спеки под твою верстку (иконки можешь поменять на свои)
    const specs = [
      //   engine && { icon: "flaticon-gearbox", text: `${engine} cc` },
      mileage && { icon: "flaticon-gasoline-pump", text: `${mileage} miles` },
      fuel && { icon: "flaticon-speedometer", text: fuel },
      transmission && { icon: "flaticon-gearbox", text: transmission },
      //   body && { icon: "flaticon-car", text: body },
      //   color && { icon: "flaticon-color-palette", text: color },
      //   mpg && { icon: "flaticon-dashboard", text: `${mpg} mpg` },
      //   co2 && { icon: "flaticon-ecology", text: `${co2} g/km` },
      //   bhp && { icon: "flaticon-engine", text: `${bhp} bhp` },
    ].filter(Boolean);

    // Категории для твоих фильтров: по умолчанию б/у + в наличии
    const filterCategories = ["Used Cars", "In Stock"];

    return {
      id: String(id),
      images: images.length ? images : ["/placeholder-car.jpg"],
      badge,
      title: title || "Vehicle",
      description,
      specs,
      price: price || "£—",
      oldPrice: undefined,
      filterCategories,
      // Дополнительно можно отдать то, что может пригодиться
      // raw: v,
    };
  });

  // Если пригодятся контакты компании в API:
  // return { org, items };

  return items;
}
