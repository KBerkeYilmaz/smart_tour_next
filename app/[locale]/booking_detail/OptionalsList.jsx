import Checkbox from "@mui/material/Checkbox";
import tourData from "../../../dummy_tour_id.json";

const OptionalsList = ({ special, price, currency }) => {
  return (
    <div className="tour-info-optionals-default-item py-[0.625rem] flex w-full justify-between items-start lg:pr-16 gap-4 border-b-2 border-slate-200 mobile:flex-col tablet:flex-row my-4">
      <div className="tablet:w-4/12 w-full">
        <h5
          className="font-semibold text-[#4A4A4A] text-lg pl-2"
          id="tour-info-room-details-title"
        >
          {special}
        </h5>
        <h6 className="text-sm text-slate-400 pl-2">
          <span className="font-semibold tracking-wide">
            {price} {`${currency}s`}
          </span>
          per Person
        </h6>
      </div>
      <div>
        <label htmlFor="">
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "#52D3D8", // Color when checked
              },
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default OptionalsList;
