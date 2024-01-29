"use client";

import { useContext, useEffect, useState } from "react";
import SidebarMenuContext from "./SidebarMenuContext";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./styles.css";

const SidebarMenuTravelerCount = () => {
  const { roomData, handleRoomData } = useContext(SidebarMenuContext);
  const [totalAdults, setTotalAdults] = useState(0);
  const [expanded, setExpanded] = useState(false);

  console.log(roomData);
  useEffect(() => {
    // Calculate the total number of adults
    const adultTotal =
      roomData.singleAdult + roomData.doubleAdult + roomData.tripleAdult;
    setTotalAdults(adultTotal);
  }, [roomData]); // This will re-run the effect whenever roomData changes

  const handleAgree = () => {
    // const singleAdult = singleRoom;
    // const doubleAdult = doubleRoom * 2;
    // const tripleAdult = tripleRoom * 3;

    // const data = {
    //   singleRoom,
    //   doubleRoom,
    //   tripleRoom,
    //   hotelRating,
    //   singleAdult,
    //   doubleAdult,
    //   tripleAdult,
    // };

    // handleRoomData(data);
    setExpanded(false); // Close the accordion
  };

  const resetForm = () => {};

  return (
    <div className="flex flex-col">
      <h3 className="font-poppins text-[#4A4A4A] text-sm pb-1">
        Amount of travelers
      </h3>
      <Accordion
        className="bg-bgAccent"
        expanded={expanded}
        disabled={totalAdults > 0 ? false : true}
        onChange={() => {
          setExpanded(!expanded);
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sidebar-room-content"
          id="sidebar-room-header"
          className="bg-bgAccent pl-2 rounded-[4px] w-full h-8 text-xs text-left"
        >
          {totalAdults > 0
            ? `${totalAdults} Adults`
            : "Please select your room details"}
        </AccordionSummary>
        <AccordionDetails className="bg-white">
          <div className="text-xs flex flex-col mb-4">
            <h5 className="my-3 text-sm font-semibold">Single Room</h5>
            <div className="flex items-baseline justify-between">
              <div>
                <h6>Select Amount of Travelers</h6>
                <hr />
                <span>{`x${roomData.singleAdult} Adult`}</span>
              </div>

              <div className="flex flex-col items-center"> 
                <label htmlFor="">Add Children</label>
                <input
                  type="select"
                  className="max-w-14 min-h-8 bg-bgAccent pl-2 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="text-xs flex flex-col mb-4">
            <h5 className="my-3 text-sm font-semibold">Double Room</h5>
            <div className="flex items-baseline justify-between">
              <div>
                <h6>Select Amount of Travelers</h6>
                <hr />
                <span>{`x${roomData.doubleAdult} Adult`}</span>
              </div>

              <div className="flex flex-col items-center"> 
                <label htmlFor="">Add Children</label>
                <input
                  type="select"
                  className="max-w-14 min-h-8 bg-bgAccent pl-2 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="text-xs flex flex-col mb-4">
            <h5 className="my-3 text-sm font-semibold">Triple Room</h5>
            <div className="flex items-baseline justify-between">
              <div>
                <h6>Select Amount of Travelers</h6>
                <hr />
                <span>{`x${roomData.tripleAdult} Adult`}</span>
              </div>

              <div className="flex flex-col items-center"> 
                <label htmlFor="">Add Children</label>
                <input
                  type="select"
                  className="max-w-14 min-h-8 bg-bgAccent pl-2 rounded-lg"
                />
              </div>
            </div>
          </div>


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
};

export default SidebarMenuTravelerCount;
