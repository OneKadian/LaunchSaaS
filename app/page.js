import OpeningSection from "./components/Important/OpeningSection";
import HeroSection from "./components/Important/HeroSection";
import CallToAction from "./components/Important/CallToAction";
import FeaturedSection from "./components/Info/FeaturedSection";
import FeaturedSection2 from "./components/Info/FeaturedSection2";
import FeaturedSection3 from "./components/Info/FeaturedSection3";
import NumberStats from "./components/Info/NumberStats";
import PricingTable from "./components/Pricing/PricingTable";
import NewsletterSection from "./components/Extras/NewsletterSection";
import Features from "./components/Info/Features";
import ContactUsForm from "./components/Extras/ContactUsForm";
import Toast from "./components/Extras/Toast";
import Footer from "./components/Footer/Footer";
import Frequently from "./components/Important/Frequently.jsx";
import Hotkey from "./components/Extras/Hotkey";
import Testimanual from "./components/Extras/Testimanual";
import PriceTable2 from "./components/Pricing/PriceTable2";
import Steps from "./components/Extras/Steps";
import Feta from "./components/Info/FeaturedSectionDynamic";
import ScrollInfo from "./components/Info/ScrollInfo";
import Estimates from "./components/Info/Estimates";
import PlainCTA from "./components/Info/PlainCTA";
import FoundersNote from "./components/Extras/FoundersNote";
import StripePricingTable from "./components/Pricing/StripePricingTable";

export default function Home() {
  // Please comment out and import the components you wish to use / not use here
  return (
    <>
      {/* <OpeningSection /> */}
      <HeroSection />
      {/* <Hotkey /> */}
      <FeaturedSection />
      <FeaturedSection2 />
      <FeaturedSection3 />
      {/* <Feta /> */}
      {/* <CallToAction /> */}
      {/* <ScrollInfo /> */}
      {/* <Estimates /> */}
      {/* <PricingTable /> */}
      {/* <NumberStats /> */}
      {/* <NewsletterSection /> */}
      <Features />
      <PriceTable2 />
      {/* <Toast /> */}
      {/* <StripePricingTable /> */}
      {/* <ContactUsForm /> */}
      {/* <Testimanual /> */}
      {/* <PlainCTA /> */}
      <FoundersNote />
      <Frequently />
      <Footer />
    </>
  );
}
