"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const [memuOpen, setMemuOpen] = useState(-1);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setShowMenu(true);
    const mobileNavigation = document.querySelectorAll('[href="#nav-mobile"]');
    const mobileMenu = document.getElementById("nav-mobile");
    const mobileMenuOverlay = document.getElementById("mobileOverlay");
    mobileNavigation.forEach((elm) => elm?.classList.remove("active"));

    mobileMenu?.classList.remove("mm-menu_opened");
    mobileMenuOverlay?.classList.remove("active");
    const toggleActiveClass = (e) => {
      e?.preventDefault();
      mobileNavigation.forEach((elm) => elm?.classList.toggle("active"));
      mobileMenu?.classList.toggle("mm-menu_opened");
      mobileMenuOverlay?.classList.toggle("active");
    };

    // Add event listener for click
    mobileNavigation.forEach((elm) =>
      elm?.addEventListener("click", toggleActiveClass)
    );

    // Cleanup event listener on component unmount
    return () => {
      mobileNavigation.forEach((elm) =>
        elm?.removeEventListener("click", toggleActiveClass)
      );
    };
  }, [pathname]); // Empty dependency array ensures it only runs on mount/unmount

  const closeMenu = () => {
    const mobileNavigation = document.querySelector(".mobile-navigation");
    const mobileMenu = document.getElementById("nav-mobile");
    const mobileMenuOverlay = document.getElementById("mobileOverlay");

    mobileNavigation?.classList.remove("active");
    mobileMenu?.classList.remove("mm-menu_opened");
    mobileMenuOverlay?.classList.remove("active");
  };

  return (
    <>
      <div
        id="nav-mobile"
        className="mm-menu mm-menu_offcanvas mm-menu_position-left mm-menu_ mm-menu_theme-black "
        style={{
          zIndex: 101,
          display: "block",
          transition: "0.5s",
          opacity: 0.5,
          visibility: "hidden",
          left: "-100%",
        }}
      >
        {showMenu && (
          <div className="mm-panels">
            <div
              id="navbar"
              className={`mm-panel ${
                memuOpen > 0
                  ? "mm-panel_opened-parent mm-hidden"
                  : "mm-panel_opened"
              } `}
            >
              <div className="mm-navbar mm-navbar_sticky">
                <a className="mm-navbar__title">
                  <span>Menu</span>
                </a>
              </div>
              <ul className="navigation mm-listview">
                <li
                  className={`mm-listitem ${pathname == "/" ? "current" : ""}`}
                >
                  <Link href={`/`} className="mm-listitem__text">
                    Home
                  </Link>
                </li>
                <li
                  className={`mm-listitem ${
                    pathname == "/about-us" ? "current" : ""
                  }`}
                >
                  <Link href={`/about-us`} className="mm-listitem__text">
                    About us
                  </Link>
                </li>
                <li
                  className={`mm-listitem ${
                    pathname == "/delivery" ? "current" : ""
                  }`}
                >
                  <Link href={`/delivery`} className="mm-listitem__text">
                    Delivery
                  </Link>
                </li>
                <li
                  className={`mm-listitem ${
                    pathname == "/faq" ? "current" : ""
                  }`}
                >
                  <Link href={`/faq`} className="mm-listitem__text">
                    FAQ
                  </Link>
                </li>
                <li
                  className={`mm-listitem ${
                    pathname == "/contact" ? "current" : ""
                  }`}
                >
                  <Link href={`/contact`} className="mm-listitem__text">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div
        className="overlay-mobile"
        id="mobileOverlay"
        onClick={closeMenu}
      ></div>
    </>
  );
}
