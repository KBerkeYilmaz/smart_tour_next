import Image from "next/image";

const TourCard = ({title, location, price}) => {
  return (
    <div className="bg-rose-600 border-2 rounded-xl border-[#DBDBDB] flex flex-col justify-start items-center pb-4">
      <Image
        src="/combined_tour1.png"
        alt="hello"
        width={280}
        height={300}
        

          />
      <div className="w-full px-4 text-black flex flex-col gap-[10px]">
        <h3 className="text-[14px] md:text-[15px] w-full">
          {title}
        </h3>
        <div className="flex w-full justify-between">
          <div>
            <p className="font-light text-xs">{location}</p>
            <p className="font-medium text-lg">{price}</p>
          </div>
          <a
            href=""
            className="text-[14px] font-semibold bg-primary px-8 py-4 rounded-full text-white cursor-pointer flex justify-center items-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
