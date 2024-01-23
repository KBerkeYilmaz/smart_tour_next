import ListDrawer from "@ui/ListDrawer";
import PackageListItem from "./PackageListItem";
import ListOptions from "./ListOptions";
import HeroTitle from "@components/HeroTitle";
import PackageFilterItems from "./PackageFilterItems";
import ButtonBlock from "@ui/ButtonBlock";

const TourList = () => {
  return (
    <>
      <HeroTitle />
      
      <section
        id="list-main-section"
        className="w-screen flex"
      >
        <PackageFilterItems />
        <div
          id="list-main-wrapper"
          className="flex flex-col justify-end desktop:w-[60%] mx-2 flex-grow overflow-auto bg-white"
        >
          
            <ListOptions />
          <div>
            
            <div
              className="flex flex-col justify-start shadow-lg shadow-slate-300 items-center w-full gap-2 p-8"
              id="list-main-layout"
            >
                <PackageListItem />
            </div>
          </div>

          <ButtonBlock />
        </div>


      </section>

     
    </>
  );
};

export default TourList;
