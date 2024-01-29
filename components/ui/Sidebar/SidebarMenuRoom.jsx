"use client";

import { SidebarMenuContext } from "./SidebarMenuContext";
import { React, useState, useEffect, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import SidebarMenuHotelRating from "./SidebarMenuHotelRating";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./styles.css";

export default function SidebarMenuRoom({ onRoomData }) {
  const [hotelRating, setHotelRating] = useState("");
  const [singleRoom, setSingleRoom] = useState(0);
  const [doubleRoom, setDoubleRoom] = useState(0);
  const [tripleRoom, setTripleRoom] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [summary, setSummary] = useState("Please select your room count");

  const { handleRoomData } = useContext(SidebarMenuContext);

  const handleRatingChange = (rating) => {
    setHotelRating(rating);
  };

  const calculateAdultCount = () => {
    return singleRoom * 1 + doubleRoom * 2 + tripleRoom * 3;
  };

  useEffect(() => {
    // Conditional logic inside the useEffect
    if (singleRoom > 0 || doubleRoom > 0 || tripleRoom > 0 || hotelRating) {
      setSummary(
        `${singleRoom} Single ${doubleRoom} Double ${tripleRoom} Triple | ${hotelRating} *`
      );
    } else {
      setSummary("Please select your room count");
    }
  }, [singleRoom, doubleRoom, tripleRoom, hotelRating]); // Dependencies

  const handleAgree = () => {
    const singleAdult = singleRoom;
    const doubleAdult = doubleRoom * 2;
    const tripleAdult = tripleRoom * 3;

    const data = {
      singleRoom,
      doubleRoom,
      tripleRoom,
      hotelRating,
      singleAdult,
      doubleAdult,
      tripleAdult,
    };

    handleRoomData(data);
    setExpanded(false); // Close the accordion
  };

  const resetForm = () => {
    setHotelRating(""); // Reset the custom state
    setSingleRoom(0);
    setDoubleRoom(0);
    setTripleRoom(0);
  };

  return (
    <div>
      <label
        htmlFor="room-type"
        className="font-poppins text-[#4A4A4A] text-sm"
      >
        <span className="text-primary">*</span> Room
      </label>
      <Accordion
        className="bg-bgAccent"
        expanded={expanded}
        onChange={() => {
          setExpanded(!expanded);
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sidebar-room-content"
          id="sidebar-room-header"
          className="text-xs"
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails className="bg-white">
          <div className="flex items-baseline justify-between">
            <div className="flex flex-col shrink text-xs w-fit">
              <label
                htmlFor="single-room-count"
                className="mb-1"
              >
                Single
              </label>
              <input
                type="number"
                id="single-room-count"
                value={singleRoom}
                onChange={(e) => setSingleRoom(Number(e.target.value))}
                min={0}
                max={18}
                className="max-w-14 min-h-8 bg-bgAccent pl-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col shrink text-xs">
              <label
                htmlFor="double-room-count"
                className="mb-1"
              >
                Double
              </label>
              <input
                type="number"
                id="double-room-count"
                value={doubleRoom}
                onChange={(e) => setDoubleRoom(Number(e.target.value))}
                min={0}
                max={18}
                className="max-w-14 min-h-8 bg-bgAccent pl-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col shrink text-xs">
              <label
                htmlFor="triple-room-count"
                className="mb-1"
              >
                Triple
              </label>
              <input
                type="number"
                id="triple-room-count"
                value={tripleRoom}
                onChange={(e) => setTripleRoom(Number(e.target.value))}
                min={0}
                max={18}
                className="max-w-14 min-h-8 bg-bgAccent pl-2 rounded-lg"
              />
            </div>
          </div>
          <SidebarMenuHotelRating onRatingChange={handleRatingChange} />
        </AccordionDetails>
        <AccordionActions className="bg-white ">
          <Button
            className="text-red-600 font-poppins"
            onClick={resetForm}
            type="reset"
          >
            Cancel
          </Button>
          <Button
            className="font-poppins"
            onClick={handleAgree}
          >
            Agree
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
