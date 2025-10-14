"use client";
import "../public/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
import MobileMenu from "@/components/common/headers/MobileMenu";
import BackToTop from "@/components/common/BackToTop";
import { usePathname } from "next/navigation"; // Import usePathname

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get pathname directly

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }

    if (typeof window !== "undefined") {
      // Initialize WOW.js
      const { WOW } = require("wowjs");
      const wow = new WOW({
        mobile: false,
        live: false,
      });
      wow.init();
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MobileMenu />
        <div className="boxcar-wrapper">{children}</div>
        <BackToTop />
      </body>
    </html>
  );
}
