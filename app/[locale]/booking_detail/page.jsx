"use client";

import { React, useState } from "react";
import Stepper from "@components/ui/Stepper";
import SpecialRequest from "./SpecialRequests";
import tourData from "../../../dummy_tour_id.json";
import GuestDetails from "./GuestDetails";
import LoginForm from "@components/forms/LoginForm";
import PricebarMenuRoot from "@components/ui/Pricebar/PricebarMenuRoot";
import PersonalizeOptions from "./PersonalizeOptions";
import TourInfoHeader from "./TourInfoHeader";
import TourInfoSub from "./TourInfoSub";

const booking_detail = () => {
  const [activeStep, setActiveStep] = useState(0);

  console.log(tourData);

  const stepComponents = [
    <PersonalizeOptions />,
    <SpecialRequest />,
    <GuestDetails />,
    <LoginForm />,
  ];

  return (
    <main className="bg-[#F2F2F2] flex justify-center items-baseline w-screen py-16 relative">
      {/* <!-- DETAILS CONTAINER --> */}

      <div className="details-container flex flex-col lg:w-7/12 justify-start py-[1.25rem] px-4 bg-white max-h-[90%] min-h-fit overflow-y-auto ">
        <TourInfoHeader />

        <TourInfoSub />
        {/* <SpecialRequest />

        <GuestDetails />
        <LoginForm /> */}
        {stepComponents[activeStep]}

        <Stepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
      {/* {/* <!-- DETAILS CONTAINER END --> */}
      <PricebarMenuRoot />

      {/* <!-- SIDEBAR END --> */}
    </main>
  );
};

export default booking_detail;
