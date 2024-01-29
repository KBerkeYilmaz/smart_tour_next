"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import "./Sidebar/styles.css";

const steps = [
  "Personalize Your Package",
  "Special Requests",
  "Guest Details",
  "Login",
  "Billing Information",
  "Passengers Info",
  "Flights",
  "Final",
];

export default function HorizontalLinearAlternativeLabelStepper({
  activeStep,
  setActiveStep,
}) {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              className="font-poppins"
              sx={{
                "& .MuiStepLabel-label": {
                  color:
                    activeStep === steps.indexOf(label) ? "white" : "black",
                  backgroundColor:
                    activeStep === steps.indexOf(label)
                      ? "#52D3D8"
                      : "transparent",
                  borderRadius: "5px",
                  padding: "2px 5px",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: 2, px: 10 }}
      >
        <button
          disabled={activeStep === 0}
          onClick={handleBack}
          className="bg-white border-2 border-primary flex justify-center items-center rounded-[4px] px-12 desktop:py-4 font-semibold text-primary form-poppins"
        >
          Back to previous step
        </button>
        <button
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
          className="bg-primary border-2 border-primary flex justify-center items-center rounded-[4px] px-12 py-2 text-white font-bold form-poppins"
        >
          {activeStep === steps.length - 1
            ? "Finish your booking"
            : "Next step"}
        </button>
      </Box>
    </Box>
  );
}
