import Image from "next/image";
import SelectInput from "@ui/SelectInput";
import {useTranslations} from 'next-intl';


const HeroForm = () => {

  const t = useTranslations('index.hero');

  return (
    <div className="flex flex-col justify-center items-center -translate-y-44 gap-4">
      <h1 className="text-center text-white font-semibold text-[1.5rem] tablet:text-[2rem] lg:text-[3.125rem] w-full h-[6.25rem] leading-[40px] lg:leading-[50px] max-w-[833px] mb-10 shrink">
        {t('title')}
        <span className="text-primary"> {t('span')} </span> 
        {t('title_2')}
      </h1>
      <ul className="flex justify-center items-center text-white gap-1 md:gap-[0.6rem] text-[10px] md:text-[15px] lg:text-[18px] w-screen">
        <li className="flex gap-[5px] md:gap-2.5">
          <Image
            src="/i.fa-dollar-sign.svg"
            alt=""
            width={25}
            height={25}
            
          />
          <h3>{t('sub-title-keywords.keyword_1')}</h3>
        </li>
        <li className="flex gap-[5px] md:gap-2.5">
          <Image
            src="/car.svg"
            alt=""
            width={25}
            height={25}
          />
          <h3>{t('sub-title-keywords.keyword_2')}</h3>
        </li>
        <li className="flex gap-[5px] md:gap-2.5">
          <Image
            src="/laptop.svg"
            alt=""
            width={25}
            height={25}
          />
          <h3>{t('sub-title-keywords.keyword_3')}</h3>
        </li>
        <li className="flex gap-[5px] md:gap-2.5">
          <Image
            src="/headphone.svg"
            alt=""
            width={25}
            height={25}
          />
          <h3>{t('sub-title-keywords.keyword_4')}</h3>
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
