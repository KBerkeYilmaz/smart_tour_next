import "../../styles/heading.css";
import { useTranslations } from "next-intl";

const DestinationGrid = () => {
  const t = useTranslations("index.destination-grid");
  return (
    <section
      className="category-filter pt-2 md:pt-[1.87rem] flex flex-col justify-start items-center gap-[2rem]"
      id="category-filter"
    >
      <div className="flex justify-center md:justify-start items-center w-full">
        <h2 className="heading2 text-center px-0.5 tablet:px-0 w-full">
        {t('title')}

        </h2>
      </div>
      <div
        className="grid grid-row-2 grid-cols-2 desktop:grid-row-1 desktop:grid-cols-4 gap-2 md:gap-[23px] desktop:gap-[15px]"
        id="main-info-grid"
      >
        <div
          className="cursor-pointer flex justify-center items-center"
          id="main-grid-item1"
        >
          <img
            src="Frame 19.svg"
            alt=""
            className="-z-10"
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center"
          id="main-grid-item2"
        >
          <img
            src="Frame 20.svg"
            alt=""
            className="-z-10"
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center"
          id="main-grid-item3"
        >
          <img
            src="Frame 21.svg"
            alt=""
            className="-z-10"
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center"
          id="main-grid-item4"
        >
          <img
            src="Frame 22.png"
            alt=""
            className="-z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
