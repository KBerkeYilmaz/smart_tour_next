import Image from "next/image";
import Link from "next/link";

const PackageListItem = () => {
  return (
    <div
      id="detail-list-container"
      class="flex flex-col sm:flex-row justify-start w-full gap-2 h-full mx-12 z-index-10"
    >
      <div
        id="details-list-image"
        className="w-full sm:w-[50%]"
      >
        <Image
          src="/list-item-placeholder.png"
          alt="Description"
          layout="responsive"
          width={1} // Aspect ratio width
          height={1} // Aspect ratio height
          objectFit="cover" // Optional: Adjust according to your needs
        />
      </div>
      <div class="flex w-full justify-between items-center">
        <div
          class="pl-4 sm:pl-0 flex flex-col h-full pt-4 justify-start items-start w-2/5 gap-2"
          id="detail-list-info"
        >
          <h2 class="font-bold desktop:text-[18px] mobile:text-sm ">
            Effotel By Sajai Jaipur
          </h2>
          <div class="text-primary flex text-[12px]">
            <img
              src="public/Location.svg"
              alt=""
            />
            <span>Kaorili, Jappur</span>
          </div>
          <div>
            <div class="flex gap-1 items-center">
              <span class="w-fit h-fit bg-primary text-white p-1 rounded-sm text-[12px]">
                4,2
              </span>
              <span class="font-bold text-[12px]"> Very Good </span>
              <span class="underline text-[12px] cursor-pointer">
                371 Reviews
              </span>
            </div>
            <div class="flex flex-col justify-start">
              <span class="font-bold text-[12px]"> Free Cancellation </span>
              <span class="font-light text-[12px] flex">
                <img
                  src="public/coffee.svg"
                  alt=""
                />
                20+ Amenities
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-end pt-4 gap-2">
          <h2 class="text-[28px] font-bold">$140</h2>
          <span class="text-[12px]">Full Day, 8 Hours</span>
          <span class="text-[12px] pb-2">English</span>
          <Link
            class="py-2 px-6 text-[10px] bg-primary text-white rounded-[5px]"
            href="/package_detail"
          >
            Customize it!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageListItem;
