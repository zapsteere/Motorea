import React from "react";
import Cars from "@/components/screens/homes/Cars";
import Header2 from "@/components/common/headers/Header2";
import Footer from "@/components/common/footers/Footer";

export const metadata = {
  title: "Cars for Sale - Motorea",
  description: "Browse our extensive collection of quality used cars for sale. Find your perfect vehicle with competitive prices and excellent service.",
};

export default function CarsForSalePage() {
  return (
    <>
      <Header2 />
      <main>
        <Cars />
      </main>
      <Footer />
    </>
  );
}
