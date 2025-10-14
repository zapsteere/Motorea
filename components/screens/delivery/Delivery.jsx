import React from "react";
import Link from "next/link";
export default function Delivery() {
  return (
    <section className="about-inner-one layout-radius">
      <div className="upper-box">
        <div className="boxcar-container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="boxcar-title">
                <ul className="breadcrumb">
                  <li>
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li>
                    <span>Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inner-container">
              {/* FAQ Column */}
              <div className="boxcar-title-three h2">
                <h2 className="title font-weight-bold">Delivery</h2>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="">
                <div className="text">
                  <p>
                    Once payment and paperwork are complete, we can arrange
                    transport directly to your door.
                    <br /> Local deliveries can often be completed the same day,
                    while long-distance deliveries are usually next day.
                  </p>
                </div>
                <div className="text">
                  <p>Every car is delivered with:</p>
                  • Valid MOT <br />
                  • Warranty paperwork <br />
                  • V5C transfer completed Delivery costs vary by location.
                  <br />
                  <p>Contact us for a tailored quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
