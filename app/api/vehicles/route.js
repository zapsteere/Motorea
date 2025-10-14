import { NextResponse } from "next/server";
import { fetchAndNormalizeVehicles } from "@/lib/normalizeVehicles";

const FEED_URL =
  "https://aacarsdna.com/feeds/c34686165959d30ea3a2aeef085b09fb/vehicles.xml";

export async function GET() {
  try {
    const items = await fetchAndNormalizeVehicles(FEED_URL);
    return NextResponse.json(
      { items },
      {
        headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=60" },
      }
    );
  } catch (e) {
    return NextResponse.json(
      { error: e?.message || "Failed to fetch feed" },
      { status: 500 }
    );
  }
}
