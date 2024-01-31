import React, { useContext } from "react";
import Image from "next/image";
import tourData from "../../../../dummy_tour_id.json";
import TourContext from "./TourContext";

import "./styles.css";

const Overview = () => {
  const { selectedTour } = useContext(TourContext);

  // Check if the selectedTour is available
  if (!selectedTour) {
    return <div>Loading...</div>; // Or some placeholder or error message
  }

  return (
    <section
      className="package-detail-overview flex flex-col justify-start items-start gap-8 w-full text-[#112211]"
      id="package-detail-overview"
    >
      <div className="pt-4 pb-2 font-semibold font-poppins text-lg">
        <h5>What is included in this package:</h5>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-3 font-poppins  desktop:gap-5 desktop:w-full text-[#4F4F4F] text-sm tracking-normal">
        {selectedTour.tour_included.map((item, index) => (
          <div
            key={index}
            className="item flex gap-2"
          >
            <Image
              src="/check-solid.svg"
              alt=""
              width={15}
              height={15}
              className={"fill-red-400"}
            />
            {item}
          </div>
        ))}
      </div>
      <div className="pt-4 pb-2 font-semibold font-poppins text-lg">
        <h5>What is not included in this package:</h5>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-3 desktop:gap-5 font-poppins desktop:w-full  text-[#4F4F4F] text-sm tracking-normal">
        {selectedTour.tour_not_included.map((item, index) => (
          <div
            key={index}
            className="item flex gap-2"
          >
            <Image
              src="/xmark-solid.svg"
              alt=""
              width={15}
              height={15}
              className={"fill-red-400"}
            />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Overview;
