import React from "react";
import Link from "next/link";
export default function About() {
  return (
    <section className="about-inner-one layout-radius">
      <div className="upper-box">
        <div className="boxcar-container">
          <div className="row wow fadeInUp">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="boxcar-title">
                <ul className="breadcrumb">
                  <li>
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li>
                    <span>About us</span>
                  </li>
                </ul>
                <h2>About Us</h2>
                <div className="text">
                  We Value Our Clients And Want Them To Have A Nice Experience
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="content-box">
                <div className="text">
                  At Motorea Ltd, we believe buying a car should be simple, 
                  transparent, and personal. Based in West London, we handpick 
                  every vehicle for quality, history, and value — no filler stock, 
                  no gimmicks. From sourcing and inspection to handover, we handle the process ourselves.

                </div>
                <div className="text">
                 When you deal with us, you deal directly with the person who sourced your car.
                 No middlemen. No unnecessary sales talk. Just straight, honest business.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
