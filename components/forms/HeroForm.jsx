import Image from "next/image";
import SelectInput from "@ui/SelectInput";

const HeroForm = () => {
  return (
    <div className="flex flex-col justify-center items-center -translate-y-44 gap-4">
      <h1 className="text-center text-white font-semibold text-[1.5rem] tablet:text-[2rem] lg:text-[3.125rem] w-full h-[6.25rem] leading-[40px] lg:leading-[50px] max-w-[833px] shrink">
        Up to 25% off on first booking
        <span className="text-primary"> Packages</span> through our site!
      </h1>
      <ul className="flex justify-center items-center text-white gap-1 md:gap-[0.6rem] text-[10px] md:text-[15px] lg:text-[18px] w-screen">
        <li className="flex gap-[5px] md:gap-2.5">
          <img
            src="i.fa-dollar-sign.svg"
            alt=""
          />
          <h3>Best Price Guaranteed</h3>
        </li>
        <li className="flex gap-[5px] md:gap-2.5">
          <img
            src="car.svg"
            alt=""
          />
          <h3>Home Pickups</h3>
        </li>
        <li className="flex gap-[5px] md:gap-2.5">
          <img
            src="laptop.svg"
            alt=""
          />
          <h3>Easy Bookings</h3>
        </li>
        <li className="flex gap-[5px] md:gap-2.5">
          <img
            src="headphone.svg"
            alt=""
          />
          <h3>24/7 Customer Care</h3>
        </li>
      </ul>
      <div className="md:p-8 lg:p-6 rounded-xl p-4 w-3/4 md:w-full xl:py-10 bg-white max-w-[833px] mx-auto flex flex-col justify-start items-center gap-4 shadow-2xl shadow-[#79747E]">
        <div className="w-full flex md:flex-row flex-col lg:justify-between items-center gap-[1rem] text-black font-poppins">
          <div className="relative hero-input-wrapper w-full">
            <SelectInput
              title="Enter Tours"
              item={["Turquia Tours", "Grecia Tours", "Espania Tours"]}
              id={"hero-tour-input"}
              labelId={"hero-tour-input-label"}
            />
          </div>

          <div className="relative hero-input-wrapper w-full">
            <SelectInput
              title="Enter Destination"
              item={["Turquia", "Grecia", "Espania"]}
              id={"hero-destination-input"}
              labelId={"hero-destination-input-label"}
            />
          </div>
        </div>

        <div className="w-full relative">
          <label
            htmlFor="hero-date-input"
            className="text-[14px] absolute -top-2 left-2 bg-white text-black font-medium"
          >
            Select Date
          </label>
          <input
            className="state-layer border-black border-[1px] w-full h-[3.5rem] rounded-[6px] p-2 text-black"
            type="date"
            placeholder="Select Your Date"
            id="hero-date-input"
          />
        </div>
        <div className="w-full flex justify-center items-center text-white">
          <button className="bg-black px-8 py-4 lg:p-0 lg:w-[19rem] lg:h-[2.81rem] font-medium rounded flex justify-center items-center">
            Show Result
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
