"use client";
import "../../../node_modules/react-date-range/dist/styles.css"; 
import "../../../node_modules/react-date-range/dist/theme/default.css"; 

import { useMemo, useState } from "react";
import {
  DateRangePicker,
  Range,
  RangeKeyDict,
  Calendar,
  DateRange,
} from "react-date-range";

const SidebarMenuCalendar = ({ value, disabledDates, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelect = (date) => {
    setSelectedDate(date.selection);
    console.log(date); // native Date object
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <div className="flex flex-col">
      {/* Start Date */}
      <div className="flex flex-col">
        <label className="font-poppins text-[#4A4A4A] text-sm">
          <span className="text-primary">*</span> Start Date
        </label>
        {/* <input
          type="date"
          className="rounded-[4px] bg-[#F2F2F2] py-[12px] pl-[15px]"
          placeholder="Select start date"
        /> */}
      </div>
      <DateRange
        onChange={handleSelect}
        direction="vertical"
        rangeColors={["#f33e5b", "#3ecf8e", "#fed14c"]}
        date={new Date()}
        showDateDisplay={false}
        minDate={new Date()}
        // disabledDates={disabledDates}
      />
    </div>
  );
};

export default SidebarMenuCalendar;
