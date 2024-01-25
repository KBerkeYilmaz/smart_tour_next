import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';



const OptionalsList = (props) => {
  return (
    <div className="tour-info-optionals-default-item py-[0.625rem] flex w-full justify-between items-start lg:pr-16 gap-4 border-b-2 border-slate-200 mobile:flex-col tablet:flex-row my-4">
      <div className="tablet:w-4/12 w-full">
        <h5
          className="font-semibold text-[#4A4A4A] text-lg pl-2"
          id="tour-info-room-details-title"
        >
          {"hello world"}
        </h5>
        <h6 className="text-sm text-slate-400 pl-2"><span className="font-semibold tracking-wide">$30</span> per Person</h6>
      </div>
      <div>
        <label htmlFor="">
        <FormControlLabel value="selected" control={<Radio />} label="Selected" />
        </label>
      </div>
    </div>
  );
};

export default OptionalsList;
