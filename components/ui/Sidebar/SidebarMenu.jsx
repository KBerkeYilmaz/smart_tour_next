import SidebarMenuCalendar from "./SidebarMenuCalendar";
import SidebarMenuRoom from "./SidebarMenuRoom";
import SidebarMenuTravelerCount from "./SidebarMenuTravelerCount";
import SidebarMenuHeader from "./SidebarMenuHeader";
import SideBarMenuPromoCode from "./SidebarMenuPromoCode";
import SidebarMenuTotalPrice from "./SidebarMenuTotalPrice";
import Link from "next/link";

import "../../../node_modules/react-date-range/dist/styles.css"; 
import "../../../node_modules/react-date-range/dist/theme/default.css"; 

// import eachDayOfInterval from "date-fns/eachDayOfInterval";
// import { eachDayOfInterval } from "date-fns/esm";

// import { Range } from "react-date-range";

// const initialDateRange = {
//   startDate: newDate(),
//   endDate: newDate(),
//   key: 'selection'
// }

import "./styles.css";

const SideBarMenu = () => {
  // const [dateRange, setDateRange] = useState(initialDateRange)

  // const disabledDates = useMemo(() => {
  //   let dates=[]
  //   reservations.forEach((reservation) => {
  //     const range = eachDayOfInterval({
  //       start: newDate(reservation.startDate),
  //       end: newDate(reservation.endDate)
  //     })

  //     dates = [ ...dates, ...range];
  //   })

  //   return dates;
  // }, [reservations])

  return (
    <section className="package-details-sidebar px-[3px] flex-col justify-start py-[3px] lg:flex tablet:items-center h-fit z-50 hidden max-w-[15.375rem]">
      <button
        className="package-sidebar-button fixed top-24 right-0 tablet:hidden"
        id="package-sidebar-button"
      >
        <img
          src="/cart-shopping-solid.svg"
          alt=""
        />
      </button>
      <div className="fixed mobile:top-0 mobile:right-0 tablet:relative flex-col mobile:min-w-[320px] bg-white min-h-screen p-4">
        <SidebarMenuHeader />
        <form
          action=""
          className="flex flex-col gap-6"
        >
          <SidebarMenuCalendar
          // value={dateRange}
          // disabledDates={disabledDates}
          // onChange={(value) => onChangeDate(value.selection)}
          />
          <SidebarMenuRoom />
          <SidebarMenuTravelerCount />
          <SideBarMenuPromoCode />
          <SidebarMenuTotalPrice />

          <button className="bg-white border-2 border-primary flex justify-center items-center rounded-[4px] px-[1rem] desktop:w-full desktop:py-4 font-semibold text-primary">
            <a href="booking_detail.html"> Customize it now! </a>
          </button>

          <div className="w-full flex justify-between items-center">
            <button>
              <img
                src="/forward-icon-solid.svg"
                alt=""
              />
            </button>
            <Link href="/booking_detail" className="bg-primary border-2 border-primary flex justify-center items-center rounded-[4px] px-8 py-2 text-white font-bold">
              Book Now 
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SideBarMenu;
