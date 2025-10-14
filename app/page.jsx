import Footer1 from "@/components/common/footers/Footer";
import Header1 from "@/components/common/headers/Header1";
import Banner from "@/components/screens/homes/Banner";
import Brands from "@/components/screens/homes/Brands";
import Brands2 from "@/components/screens/homes/Brands2";
import Cars from "@/components/screens/homes/Cars";
import Cars2 from "@/components/screens/homes/Cars2";
import Cta from "@/components/screens/homes/Cta";
import Features from "@/components/screens/homes/Features";
import Hero from "@/components/screens/homes/Hero";
import Testimonials from "@/components/screens/homes/Testimonials";

export const metadata = {
  title:
    "Home || Motorea – Buy & Sell Cars Online | New & Used Vehicles Marketplace",
  description:
    "Discover Motorea – your trusted online marketplace for cars. Browse thousands of new and used vehicles, compare prices, and connect with verified sellers. Fast, simple, and secure car buying and selling.",
};
export default function HomePage1() {
  return (
    <>
      <Header1 headerClass="header-style-v1 style-two" />
      <Hero />
      <Brands />
      <Cars />
      <Cta />
      <Features />
      <Cars2 />
      <Testimonials />
      {/* <Team /> */}
      {/* <Inspiration /> */}
      {/* <Service /> */}
      <Brands2 />
      <Banner />
      <Footer1 parentClass="boxcar-footer footer-style-two" />
    </>
  );
}
