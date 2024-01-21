const PackageFilterItems = () => {
  return (
    <>
      <div
        id="filter-bar"
        className="filter-bar fixed w-3/5 md:w-2/5 h-screen z-50 bg-white top-0 left-0 flex flex-col justify-start items-center py-2 px-6 text-[#200E3A] desktop:hidden"
      >
        <button
          className="absolute right-4 top-2"
          id="x-mark"
        >
          <img
            src="public/xmark-solid.svg"
            alt=""
            className="w-4"
          />
        </button>
        <div className="flex flex-col w-full justify-start items-start">
          <h1 className="text-[16px] font-bold text-[#200E3A] font-[lato] pb-2 ">
            Filter For You
          </h1>
          <ul
            className="text-[#4A4A4A] text-[12px] font-medium flex flex-col gap-1.5"
            id="filter-list"
          ></ul>
        </div>
      </div>

      <div
        id="filter-bar-desktop"
        className="filter-bar-desktop sticky w-3/5 md:w-2/5 max-h-[100vh] z-50 bg-white top-0 left-0 flex-col justify-start items-center py-2 px-6 text-[#200E3A] gap-4 font-lato shrink hidden desktop:flex"
      >
        <div className="flex flex-col w-full justify-start items-start">
          <h2 className="text-[16px] font-bold text-[#200E3A] font-lato pb-2">
            Filter For You
          </h2>

          <ul
            className="text-[#4A4A4A] text-[12px] font-medium flex flex-col gap-1.5"
            id="filter-list-tags1"
          ></ul>
        </div>

        <div className="flex flex-col w-full justify-start items-start">
          <form action="">
            <h2 className="text-[1rem] font-bold text-[#200E3A] pb-2">
              When are you traveling
            </h2>

            <div className="flex justify-start items-center gap-4">
              <input
                type="date"
                placeholder="Start"
                className="pl-1 border-2 border-primary rounded-[5px] py-2"
              />
              <span> to </span>
              <input
                type="date"
                placeholder="Finish"
                className="pl-1 border-2 border-primary rounded-[5px] py-2"
              />

              <button className="bg-primary p-2">
                <img
                  src="public/chevron-right.svg"
                  alt=""
                  className="w-6 rounded-[6px]"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full justify-start items-start">
          <form action="">
            <h2 className="text-[16px] font-bold text-[#200E3A] font-lato pb-2">
              Duration
            </h2>

            <div className="flex justify-start items-center gap-4 w-full">
              <input
                type="date"
                placeholder="Start"
                className="pl-1 border-2 border-primary rounded-[5px] py-2 max-w-32"
                min="0"
              />
              <span> to </span>
              <input
                type="date"
                placeholder="Finish"
                className="pl-1 border-2 border-primary rounded-[5px] py-2 max-w-32"
                min="0"
              />

              <button className="bg-primary p-2">
                <img
                  src="public/chevron-right.svg"
                  alt=""
                  className="w-6 rounded-[6px]"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full justify-start items-start">
          <form action="">
            <h2 className="text-[16px] font-bold text-[#200E3A] font-lato pb-2">
              Destination
            </h2>

            <div className="flex justify-start items-center gap-4">
              <select
                type="select"
                placeholder="Choose Country"
                className="pl-1  border-2 border-primary rounded-[5px] py-2"
              >
                <option value="Turquia">Turqia</option>
                <option value="Grecia">Grecia</option>
              </select>

              <button
                className="bg-primary p-2"
                type="submit"
              >
                <img
                  src="chevron-right.svg"
                  alt=""
                  className="w-6 rounded-[6px]"
                />
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col w-full justify-start items-start">
          <h2 className="text-[16px] font-bold text-[#200E3A] font-lato pb-2">
            Price
          </h2>

          <ul
            className="text-[#4A4A4A] text-[12px] font-medium flex flex-col gap-1.5"
            id="filter-list-tags2"
          ></ul>
        </div>
      </div>
    </>
  );
};

export default PackageFilterItems;