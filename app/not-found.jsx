import Footer1 from "@/components/common/footers/Footer";
import Header1 from "@/components/common/headers/Header1";
import NotFound from "@/components/screens/not-found/NotFound";

import React from "react";

export const metadata = {
  title:
    "Page Not Found || Motorea – Buy & Sell Cars Online | New & Used Vehicles Marketplace",
  description:
    "Discover Motorea – your trusted online marketplace for cars. Browse thousands of new and used vehicles, compare prices, and connect with verified sellers. Fast, simple, and secure car buying and selling.",
};
export default function NotFoundPage() {
  return (
    <>
      <Header1 headerClass="boxcar-header header-style-v1 style-two inner-header cus-style-1" />
      <NotFound />

      <Footer1 parentClass="boxcar-footer footer-style-one v1 cus-st-1" />
    </>
  );
}
