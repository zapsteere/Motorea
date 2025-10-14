"use client";
import { carData } from "@/data/cars";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Cars2() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/vehicles", { cache: "no-store" });
        const data = await res.json();
        const vehicles = data?.items || [];
        if (mounted) setItems(vehicles);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleBooking = async (car) => {
    setCheckoutLoading(car.id);
    try {
      // Извлекаем цену из строки (например, "£49.99" -> 4999)
      const priceMatch = car.price.match(/[\d,]+\.?\d*/);
      const priceValue = priceMatch ? parseFloat(priceMatch[0].replace(/,/g, '')) : 0;
      const amount = Math.round(priceValue * 100); // конвертируем в пенсы/центы

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: "gbp",
          metadata: {
            vehicleId: car.id,
            vehicleTitle: car.title,
            vehiclePrice: car.price,
          },
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Редирект на Stripe Checkout
      } else {
        console.error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to start checkout. Please try again.");
    } finally {
      setCheckoutLoading(null);
    }
  };

  return (
    <section className="cars-section-three pt-0">
      <div className="boxcar-container">
        <div className="boxcar-title wow fadeInUp">
          <h2>Specials</h2>
        </div>

        <Slider
          slidesToScroll={1}
          slidesToShow={4}
          responsive={[
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
              },
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]}
          arrows
          className="row car-slider-three wow fadeInUp"
        >
          {items.map((car, index) => (
            <div
              key={index}
              className="car-block-three col-lg-3 col-md-6 col-sm-12"
            >
              <div className="inner-box">
                <div
                  className={`image-box ${
                    car.badge == "Great Price" ? "two" : ""
                  }`}
                >
                  <div className="slider-thumb">
                    {car.images.slice(0, 1).map((image, i) => (
                      <div className="image">
                        <Image
                          src={String(image)}
                          alt={car.title}
                          width={329}
                          height={220}
                        />
                      </div>
                    ))}
                  </div>
                  {car.badge && <span>{car.badge}</span>}
                  <div
                    href={`/inventory-page-single-v1/${car.id}`}
                    title=""
                    className="icon-box"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_601_1274)">
                        <path
                          d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z"
                          fill="black"
                        ></path>
                      </g>
                      <defs>
                        <clippath id="clip0_601_1274">
                          <rect width="12" height="12" fill="white"></rect>
                        </clippath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="content-box">
                  <h6 className="title text-truncate">{car.title}</h6>
                  <div className="text text-truncate">{car.description}</div>
                  <ul>
                    {car.specs.map((spec, i) => (
                      <li key={i}>
                        <i className={spec.icon} /> {spec.text}
                      </li>
                    ))}
                  </ul>
                  <div className="btn-box">
                    <span>{car.price}</span>
                    <small>{car.oldPrice}</small>
                    <button
                      onClick={() => handleBooking(car)}
                      disabled={checkoutLoading === car.id}
                      className="details"
                      style={{ border: 'none', background: 'none', cursor: checkoutLoading === car.id ? 'wait' : 'pointer' }}
                    >
                      {checkoutLoading === car.id ? 'Loading...' : 'Booking'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
