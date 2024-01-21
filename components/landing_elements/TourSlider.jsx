import TourCard from "@ui/TourCard";

const TourSlider = () => {
  return (
    <section
      className="dynamic-slider1 flex flex-col w-screen my-4 tablet:px-20 lg:px-40 justify-center items-center"
      id="dynamic-slider1"
    >
      <div className="flex justify-start items-center w-full px-2 tablet:px-20 lg:px-40">
        <h2 className="heading3">Turquia Tours</h2>
      </div>
      <div className="flex w-full justify-center gap-10 items-center">
      <TourCard
        title={"test"}
        price={"test"}
        destination={"test"}
      />
      <TourCard
        title={"test"}
        price={"test"}
        destination={"test"}
      />
      <TourCard
        title={"test"}
        price={"test"}
        destination={"test"}
      />
      <TourCard
        title={"test"}
        price={"test"}
        destination={"test"}
      />
      </div>
    </section>
  );
};

export default TourSlider;
