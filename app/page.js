import OpeningSection from "./components/OpeningSection";
import CallToAction from "./components/CallToAction";
import FeaturedSection from "./components/FeaturedSection";
import NumberStats from "./components/NumberStats";
import PricingTable from "./components/PricingTable";
import NewsletterSection from "./components/NewsletterSection";
import Features from "./components/Features";
import ContactUsForm from "./components/ContactUsForm";
import Footer from "./components/Footer";
import Frequently from "./components/Frequently.jsx";
import Hotkey from "./components/Hotkey";

export default function Home() {
  // Please comment and import the components you wish to use / not use here
  return (
    <>
      <OpeningSection />
      <Hotkey />
      <FeaturedSection />
      {/* <CallToAction /> */}
      <PricingTable />
      {/* <NumberStats /> */}
      {/* <NewsletterSection /> */}
      <Features />
      {/* <ContactUsForm /> */}
      <Frequently />
      <Footer />
    </>
  );
}
