"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

export default function Cars() {
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
    <section className="cars-section-four bg-1">
      <div className="boxcar-container">
        <div className="boxcar-title wow fadeInUp">
          <h2>Explore All Vehicles</h2>
        </div>

        {loading ? (
          <p className="opacity-70">Loading vehicles…</p>
        ) : (
          <div className="tab-content wow fadeInUp" data-wow-delay="200ms">
            <div className="tab-pane fade show active">
              <div className="row">
                {items.map((car) => (
                  <div
                    key={car.id}
                    className="box-car car-block-four style-bg col-xl-3 col-lg-4 col-md-6 col-sm-12"
                  >
                    <div className="inner-box">
                      <div
                        className={`image-box ${
                          car.badge === "Great Price" ? "two" : ""
                        }`}
                      >
                        <Slider dots slidesToShow={1} className="slider-thumb">
                          {car.images.slice(0, 3).map((image, i) => (
                            <div key={i} className="image d-block">
                              <div>
                                <Image
                                  src={String(image)}
                                  alt={car.title}
                                  width={329}
                                  height={220}
                                  style={{
                                    width: "100%",
                                    height: 220,
                                    objectFit: "cover",
                                    display: "block",
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </Slider>
                        {car.badge && <span>{car.badge}</span>}
                      </div>

                      <div className="content-box">
                        <h6 className="title">{car.title}</h6>
                        <div className="text text-truncate">
                          {car.description}
                        </div>
                        <ul>
                          {car.specs.map((spec, i) => (
                            <li key={i}>
                              <i className={spec.icon} /> {spec.text}
                            </li>
                          ))}
                        </ul>
                        <div className="btn-box">
                          <span>{car.price}</span>
                          {car.oldPrice && <small>{car.oldPrice}</small>}
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

                {!items.length && (
                  <div className="col-12">
                    <p className="opacity-70">No vehicles found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
