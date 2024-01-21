import Image from "next/image";
import HeroForm from "@components/forms/HeroForm";
import DestinationGrid from "@components/landing_elements/DestinationGrid";
import TourSlider from "@components/landing_elements/TourSlider";
import LandingContactForm from "@components/forms/LandingContactForm";
import Testimonial from "@components/landing_elements/Testimonial";
import HeroTitle from "@components/HeroTitle";

export default function Home() {
  return (
    <>
      <HeroTitle />
      <DestinationGrid />
      <TourSlider />
      <TourSlider />
      <TourSlider />
      <LandingContactForm />
      <Testimonial />
    </>
  );
}
