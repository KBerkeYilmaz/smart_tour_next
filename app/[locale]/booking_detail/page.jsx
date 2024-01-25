import Stepper from "@components/ui/Stepper";
import OptionalsList from "./OptionalsList";
import InsuranceList from "./InsuranceList";
import SpecialRequest from "./SpecialRequests";
import PricingBar from "./PricingBar";
import tourData from '../../../dummy_tour_id.json'
import GuestDetails from "./GuestDetails";
import LoginForm from "@components/forms/LoginForm";
import SideBarMenuRoot from "@components/ui/Pricebar/SidebarMenuRoot";

const booking_detail = () => {

  console.log(tourData)

  return (
    <main className="bg-[#F2F2F2] flex justify-center items-start w-screen py-16 lg:pr-36">
      {/* <!-- DETAILS CONTAINER --> */}

      <div className="details-container container desktop:w-8/12 flex flex-col justify-start py-[1.25rem] bg-white">
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

        <div
          className="flex gap-[1.875rem] flex-col tablet:flex-row"
          id="tour-info-selected-item-wrapper"
        >
          <div
            className="flex flex-col gap-2 w-full tablet:w-1/2 bg-[#F2F2F2] p-[0.938rem] justify-center"
            id="tour-dates"
          >
            <h5>Tour Dates</h5>
            <div className="flex gap-[1.875rem] flex-col tablet:flex-row">
              <h5>
                Fri <span className="font-bold">18 Aug</span> 2023
              </h5>
              <h5>
                Sun <span className="font-bold">20 Aug</span> 2023
              </h5>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 w-full tablet:w-1/2 font-poppins p-[0.938rem] justify-center"
            id="tour-people"
          >
            <h5>
              Fri <span className="font-bold">2 Nights</span> 2023
            </h5>
            <div className="flex gap-[1.875rem]">
              <h5>
                <span
                  className="font-bold"
                  id="tour-adult-count"
                >
                  9
                </span>
                Adult
              </h5>
              <h5>
                <span
                  className="font-bold"
                  id="tour-children-count"
                >
                  4
                </span>
                Children
              </h5>
            </div>
          </div>
        </div>


          <OptionalsList optionalItems={tourData.tour_specials} optionalItemsPrice={tourData.tour_specials}/>

          <InsuranceList />

          <SpecialRequest />  


          <GuestDetails />
          <LoginForm />

        <Stepper />
      </div>
      <SideBarMenuRoot />
      {/* <!-- DETAILS CONTAINER END -->
  
        {/* <!-- SIDEBAR END --> */}
    </main>
  );
};

export default booking_detail;
