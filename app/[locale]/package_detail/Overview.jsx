"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const initialIncluded = [
  {
    tour_item1: "Free transfer",
    tour_item1_price: 1231,
    tour_item1_currency: "$",
  },
  {
    tour_item2: "24/7 talk lines",
    tour_item2_price: 1231,
    tour_item2_currency: "$",
  },
  {
    tour_item3: "Access to 5 existing lines",
    tour_item3_price: 1231,
    tour_item3_currency: "$",
  },
];

const initialNotIncluded = [
  {
    tour_item1: "Free transfer",
    tour_item1_price: 1231,
    tour_item1_currency: "$",
  },
  {
    tour_item2: "24/7 talk lines",
    tour_item2_price: 1231,
    tour_item2_currency: "$",
  },
  {
    tour_item3: "Access to 5 existing lines",
    tour_item3_price: 1231,
    tour_item3_currency: "$",
  },
];

const Overview = ({ package_inc }) => {
  const [included, setIncluded] = useState(initialIncluded);
  const [notIncluded, setNotIncluded] = useState(initialNotIncluded);

  const renderItem = (item) => {
    const key = Object.keys(item)[0]; // Get the first key of each item object
    return (
      <div className="text-black">
        {item[key]} - {item[key + "_price"]} {item[key + "_currency"]}
      </div>
    );
  };

  return (
    <section
      className="package-detail-overview flex flex-col justify-start items-start gap-8 w-full text-[#112211]"
      id="package-detail-overview"
    >
      <div className="pt-4 pb-2 font-semibold font-poppins text-xl">
        <h5>What is included in this package:</h5>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-3  desktop:gap-5 desktop:w-full text-[#4F4F4F]">
        {included.map((item, index) => (
          <div
            key={index}
            className="item"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className="pt-4 pb-2 font-semibold font-poppins text-xl">
        <h5>What is not included in this package:</h5>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-3 desktop:gap-5  desktop:w-full">
        {notIncluded.map((item, index) => (
          <div
            key={index}
            className="item"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Overview;
