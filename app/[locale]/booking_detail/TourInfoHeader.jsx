import tourData from "../../../dummy_tour_id.json";



const TourInfoHeader = () => {
  return (
    <div className="flex justify-between w-full mobile:flex-col items-center desktop:flex-row border-2 p-2 mb-4">
      <div className="desktop:max-w-60 w-full sm:w-full md:w-full md:flex md:justify-center md:items-center">
        <img
          src="/detail-placeholder.png"
          alt=""
          className="rounded-[5px]"
          id=""
        />
      </div>
      <div className="flex flex-col">
        <h1
          className="text-[1.5rem] font-semibold font-lato"
          id="booking-info-title"
        >
          {tourData.tour_title}
        </h1>
        <span
          className="text-[13px] flex justify-end text-slate-400"
          id="booking-info-sub-title"
        >
          {tourData.tour_location}
        </span>
      </div>
    </div>
  );
};

export default TourInfoHeader;
