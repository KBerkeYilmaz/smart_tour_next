"use client";

import { useState } from "react";
import PricebarMenu from "./PricebarMenu";
import PricebarMenuContext from "./PricebarMenuContext";

import "./styles.css";

const PricebarMenuRoot = () => {
  const [priceData, setPriceData] = useState({
  }); // State to hold room data

  
  const handlePriceData = (data) => {
    setRoomData(data);
    console.log(data)
  };


  return (
    <PricebarMenuContext.Provider
      value={{ priceData, handlePriceData, testValue: "Hello World" }}
    >
      <PricebarMenu />
    </PricebarMenuContext.Provider>
  );
};

export default PricebarMenuRoot;
