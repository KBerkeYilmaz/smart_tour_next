import tourData from "../../../dummy_tour_id.json";
import "./styles.css";

const Overview = ({ package_inc }) => {
  return (
    <section
      className="package-detail-overview flex flex-col justify-start items-start gap-8 w-full text-[#112211]"
      id="package-detail-overview"
    >
      <div className="pt-4 pb-2 font-semibold font-poppins text-lg">
        <h5>What is included in this package:</h5>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-3 font-poppins  desktop:gap-5 desktop:w-full text-[#4F4F4F] text-sm tracking-normal">
        {tourData.tour_included.map((item, index) => (
          <div
            key={index}
            className="item flex gap-2"
          >
            <img
              src="/check-solid.svg"
              alt=""
              width={15}
              height={15}
            />
            {item}
          </div>
        ))}
      </div>
      <div className="pt-4 pb-2 font-semibold font-poppins text-lg">
        <h5>What is not included in this package:</h5>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-3 desktop:gap-5 font-poppins desktop:w-full  text-[#4F4F4F] text-sm tracking-normal">
        {tourData.tour_not_included.map((item, index) => (
          <div
            key={index}
            className="item flex gap-2"
          >
            <img
              src="/xmark-solid.svg"
              alt=""
            />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Overview;
