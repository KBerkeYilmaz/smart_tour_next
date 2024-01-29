import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const InsuranceList = () => {
  return (
    <div
      className="tour-info-optionals px-[1rem] pb-[1rem] bg-[#FAFBFC]"
      id="tour-info-optionals"
    >
      <h2 className="w-full flex justify-start text-lg font-semibold mt-2">
        Insure It!
      </h2>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="insurance options"
          defaultValue=""
          name="insurance-options"
        >
          {/* First Option */}
          <div className="tour-info-optionals-item py-[0.625rem] flex w-full justify-start items-center gap-6 border-b-2 border-slate-200">
            <FormControlLabel
              value="full"
              control={
                <Radio
                  sx={{
                    
                    "&.Mui-checked": {
                      color: "#52D3D8", // Color when checked
                    },
                  }}
                />
              }
              label=""
              className="w-1/12 flex items-center justify-center"
              color="#52D3D8"
            />
            <div className="w-9/12">
              <h5
                className="font-semibold"
                id="tour-info-optional-title-1"
              >
                Pay in full
              </h5>
              <h6
                className="text-black"
                id="tour-info-optionals-detail-1"
              >
                <span>Pay the total and you are all set</span>
              </h6>
            </div>
          </div>

          {/* Second Option */}
          <div className="tour-info-optionals-item py-[0.625rem] flex w-full justify-start items-center gap-6 border-b-2 border-slate-200">
            <FormControlLabel
              value="part"
              control={
                <Radio
                  sx={{
                    
                    "&.Mui-checked": {
                      color: "#52D3D8", // Color when checked
                    },
                  }}
                />
              }
              label=""
              className="w-1/12 flex items-center justify-center"
            />
            <div className="w-9/12">
              <h5
                className="font-semibold"
                id="tour-info-optional-title-2"
              >
                Pay part now, part later
              </h5>
              <h6
                className="text-black"
                id="tour-info-default-detail-2"
              >
                Pay ₹10,200 now, and the rest (₹70,000) will be automatically
                charged to the same payment method on Jul 27, 2023. No extra
                fees.
              </h6>
            </div>
          </div>

          {/* Third Option */}
          <div className="tour-info-optionals-item py-[0.625rem] flex w-full justify-start items-center gap-6 border-b-2 border-slate-200">
            <FormControlLabel
              value="insure"
              control={
                <Radio
                  sx={{
                    
                    "&.Mui-checked": {
                      color: "#52D3D8", // Color when checked
                    },
                  }}
                />
              }
              label=""
              className="w-1/12 flex items-center justify-center"
            />
            <div className="w-9/12">
              <h5
                className="font-semibold"
                id="tour-info-optional-title-3"
              >
                Insure It
              </h5>
              <h6
                className="text-black"
                id="tour-info-default-detail-3"
              >
                <span>9 Adults</span>, <span>1 Child</span>
              </h6>
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default InsuranceList;
