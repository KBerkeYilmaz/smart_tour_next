"use client";

import { React, useState, useContext } from "react";
import tourData from "../../../../dummy_tour_id.json";
import OptionsBar from "./OptionsBar";
import Overview from "./Overview";
import Review from "./Review";
import Image from "next/image";
import Map from "./Map";
import ProgramDuration from "./ProgramDuration";
import Program from "./Program";
import TourContext from "./TourContext";

const PackageInfoPanel = () => {
  const [selectedOption, setSelectedOption] = useState("overview");
  const { selectedTour } = useContext(TourContext);  

  console.log(selectedTour)

  if (!selectedTour) {
    return <div>Loading...</div>;  // Or any other placeholder you prefer
  }


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="details-container container desktop:px-[1.25rem] px-4 w-full">
      <section
        id="package-details-header"
        className="font-poppins w-full flex flex-col justify-center items-start"
      >
        <div className="flex flex-col gap-1 mb-1 w-full desktop:text-[24px]">
          <h1 className="font-semibold">{selectedTour.tour_title}</h1>
          <span className="flex gap-1 text-[0.75rem]">
            <Image
              src={"/location.svg"}
              alt=""
              width={10}
              height={10}
            />
            {selectedTour.tour_location}
          </span>
          <div className="flex w-full justify-start items-center gap-2">
            <span className="p-1 bg-primary rounded-[4px]">
              {selectedTour.tour_review_tp}
            </span>
            <span className="text-[0.73rem]"> Very Good </span>
            <a
              href=""
              className="text-[0.9rem] font-bold"
            >
              {`${selectedTour.tour_review_count} Reviews`}
            </a>
          </div>
        </div>
      </section>

      <section id="package-details-preview">
        <div className="h-auto w-full">
          {/* <!-- Required wrapper DO NOT DELETE--> */}
          <div className="h-full desktop:w-full">
            {/* <!-- classNameName --> */}
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/antalya-banner.jpg"
                alt=""
                width={800}
                height={400}
                className="rounded-3xl"
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PACKAGE DETAIL ACCORDEON START --> */}

      <section className="py-4 px-1 package-details-article">
        <article className="font-poppins text-[0.9rem]">
          {selectedTour.tour_desc}
        </article>
      </section>

      <section className="package-details w-full gap-8">
        <OptionsBar
          onOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />

        <ProgramDuration />
      </section>

      {selectedOption === "overview" && <Overview />}
      {selectedOption === "map" && <Map />}
      {selectedOption === "program" && <Program />}

      {/* <!-- REVIEW ACCORDEON START --> */}

      <Review />
    </div>
  );
};

export default PackageInfoPanel;
