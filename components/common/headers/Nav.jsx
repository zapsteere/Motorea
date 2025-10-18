"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menuItem) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] == pathname.split("/")[1]) {
        active = true;
      }
    }
    if (menuItem.length) {
      active = menuItem.some(
        (elm) => elm.href?.split("/")[1] == pathname.split("/")[1]
      );
    }
    if (menuItem.length) {
      menuItem.forEach((item) => {
        item.links?.forEach((elm2) => {
          if (elm2.href?.includes("/")) {
            if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
              active = true;
            }
          }
          if (elm2.length) {
            elm2.forEach((item2) => {
              item2?.links?.forEach((elm3) => {
                if (elm3.href.split("/")[1] == pathname.split("/")[1]) {
                  active = true;
                }
              });
            });
          }
        });
        if (item.href?.includes("/")) {
          if (item.href?.split("/")[1] == pathname.split("/")[1]) {
            active = true;
          }
        }
      });
    }

    return active;
  };

  return (
    <>
      <li>
        <Link className={pathname == "/" ? "menuActive" : ""} href={`/`}>
          Home
        </Link>
      </li>
      <li>
        <Link
          className={pathname == "/cars-for-sale" ? "menuActive" : ""}
          href={`/cars-for-sale`}
        >
          Cars for Sale
        </Link>
      </li>
      <li>
        <Link
          className={pathname == "/about-us" ? "menuActive" : ""}
          href={`/about-us`}
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          className={pathname == "/delivery" ? "menuActive" : ""}
          href={`/delivery`}
        >
          Delivery
        </Link>
      </li>
      <li>
        <Link className={pathname == "/faq" ? "menuActive" : ""} href={`/faq`}>
          FAQ
        </Link>
      </li>
      <li>
        <Link
          className={pathname == "/contact" ? "menuActive" : ""}
          href={`/contact`}
        >
          Contact
        </Link>
      </li>
    </>
  );
}
