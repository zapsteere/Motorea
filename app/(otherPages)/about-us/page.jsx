import Footer1 from "@/components/common/footers/Footer";
import Header1 from "@/components/common/headers/Header1";
import About from "@/components/screens/about/About";

import React from "react";

export const metadata = {
  title:
    "About us || Motorea – Buy & Sell Cars Online | New & Used Vehicles Marketplace",
  description:
    "Discover Motorea – your trusted online marketplace for cars. Browse thousands of new and used vehicles, compare prices, and connect with verified sellers. Fast, simple, and secure car buying and selling.",
};
export default function AboutUsPage() {
  return (
    <>
      <Header1 headerClass="boxcar-header header-style-v1 style-two inner-header cus-style-1" />
      <About />

      <Footer1 parentClass="boxcar-footer footer-style-one v1 cus-st-1" />
    </>
  );
}
