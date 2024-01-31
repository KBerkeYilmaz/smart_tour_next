"use client";

import React, { useState, useEffect } from "react";
import TourContext from "./TourContext";
import tourData from "../../../../dummy_tour_id.json";

const TourProvider = ({ children, tourId }) => {
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    if (!tourId) {
      return; // Exit early if tourId is not available
    }

    const tour = tourData.find((tour) => {
      const cleanTourId = tour.tour_id.toString().trim();
      const cleanQueryTourId = tourId.trim();
      return cleanTourId === cleanQueryTourId;
    });

    setSelectedTour(tour);
  }, [tourId]);

  console.log(selectedTour);

  return (
    <TourContext.Provider value={{ selectedTour }}>
      {children}
    </TourContext.Provider>
  );
};

export { TourProvider };
