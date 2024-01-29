import Head from "next/head";
import DestinationGrid from "@components/landing_elements/DestinationGrid";
import TourSlider from "@components/landing_elements/TourSlider";
import LandingContactForm from "@components/forms/LandingContactForm";
import Testimonial from "@components/landing_elements/Testimonial";
import HeroTitle from "@components/HeroTitle";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/hero-bg.webp"
          as="image"
        />
      </Head>
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
