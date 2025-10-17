"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  carBrands,
  contactItems,
  navItems,
  socialMediaLinks,
  vehicleTypes,
} from "@/data/footerLinks";
import Link from "next/link";
export default function Footer({
  parentClass = "boxcar-footer footer-style-one cus-st-1",
}) {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const to = "sulaiman@motorea.co";
    const subject = encodeURIComponent("New message from the site");
    const body = encodeURIComponent(`Email: ${formData.email}\n`);

    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    try {
      const a = document.createElement("a");
      a.href = mailto;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          to
        )}&su=${subject}&body=${body}`;
        window.open(gmailUrl, "_blank", "noopener,noreferrer");
      }, 1200);
    } catch (err) {
      console.error("mailto failed", err);
      navigator.clipboard?.writeText(to).catch(() => {});
      alert(
        `Couldn't open your mail app. The address ${to} has been copied to clipboard.`
      );
    }
  };

  return (
    <footer className={parentClass}>
      <div className="footer-top">
        <div className="boxcar-container">
          <div className="right-box">
            <div className="top-left wow fadeInUp">
              <h6 className="title">Join us</h6>
              <div className="text">
                Receive pricing updates, shopping tips &amp; more!
              </div>
            </div>
            <div className="subscribe-form wow fadeInUp" data-wow-delay="100ms">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your e-mail address"
                    required
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-section">
        <div className="boxcar-container">
          <div className="row">
            {/* Footer COlumn */}
            <div className="footer-column-two col-lg-9 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget wow fadeInUp">
                    <h4 className="widget-title">Useful Links</h4>
                    <div className="widget-content">
                      <ul className="user-links style-two">
                        {navItems.map((elm, i) => (
                          <li key={i}>
                            <Link href={elm.link}>{elm.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="footer-widget links-widget wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <h4 className="widget-title">Quick Links</h4>
                    <div className="widget-content">
                      <ul className="user-links style-two">
                        {contactItems.map((elm, i) => (
                          <li key={i}>
                            <Link href={elm.link}>{elm.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="footer-widget links-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <h4 className="widget-title">Our Brands</h4>
                    <div className="widget-content">
                      <ul className="user-links style-two">
                        {carBrands.map((elm, i) => (
                          <li key={i}>
                            <Link href={elm.link}>{elm.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="footer-widget links-widget wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <h4 className="widget-title">Vehicles Type</h4>
                    <div className="widget-content">
                      <ul className="user-links style-two">
                        {vehicleTypes.map((elm, i) => (
                          <li key={i}>
                            <Link href={elm.link}>{elm.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer column */}
            <div className="footer-column col-lg-3 col-md-12 col-sm-12">
              <div
                className="footer-widget social-widget wow fadeInUp"
                data-wow-delay="400ms"
              >
                <h4 className="widget-title">Connect With Us</h4>
                <div className="widget-content">
                  <div className="social-icons">
                    <ul>
                      {socialMediaLinks.map((social, index) => (
                        <li key={index}>
                          <a href={social.link}>
                            <i className={social.iconClass} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Footer Bottom */}
      <div className="footer-bottom">
        <div className="boxcar-container">
          <div className="inner-container">
            <div className="copyright-text wow fadeInUp">
              © <a href="#">2024 Motorea.com. All rights reserved.</a>
            </div>
            <ul className="footer-nav wow fadeInUp" data-wow-delay="200ms">
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Notice</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
