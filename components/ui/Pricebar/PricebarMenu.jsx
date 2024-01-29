import PricebarMenuHeader from "./PricebarMenuHeader";
import PricebarMenuPromoCode from "./PricebarMenuPromoCode";
import PricebarMenuTotalPrice from "./PricebarMenuTotalPrice";
import tourData from "../../../dummy_tour_id.json";
import "./styles.css";

// import eachDayOfInterval from "date-fns/eachDayOfInterval";
// import { eachDayOfInterval } from "date-fns/esm";

// import { Range } from "react-date-range";

// const initialDateRange = {
//   startDate: newDate(),
//   endDate: newDate(),
//   key: 'selection'
// }

const PricebarMenu = () => {
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
    <section className="package-details-sidebar px-2 flex-col justify-start py-[3px] lg:flex z-50 hidden lg:sticky h-screen lg:bottom-0 ">
      <div className="flex-col mobile:min-w-[320px] bg-white min-h-screen p-4 font-poppins">
        <PricebarMenuHeader />
        <form
          action=""
          className="flex flex-col gap-6 bg-white"
        >
          <div className="flex flex-col w-full gap-4">
            <div className="bg-white w-full">
              <h4 className="text-sm ">{tourData.tour_title}</h4>
              <span className="text-xs text-accent">
                {tourData.tour_start_date} // {tourData.tour_end_date}
              </span>
              <br />
              <span className="text-xs text-accent">
                1 Double Room x 3 Nights
              </span>
              <hr />
            </div>
            <div className="flex justify-between items-center w-full">
              <h4 className="text-blueAccent ">Total Discount</h4>
              <span>20$</span>
            </div>
            <hr />

            <div className="flex justify-between items-center w-full">
              <h4>Price after discount</h4>
              <span>20$</span>
            </div>
            <hr />

            <div className="flex justify-between items-center w-full">
              <h4>Hotel taxes</h4>
              <span>20$</span>
            </div>
            <hr />

            <div className="flex">
              <span className="text-primary">+ </span>
              <h5 className="text-neutral-400">Ticket valid for 48 hours.</h5>
            </div>
            <div className="flex">
              <span className="text-primary">+ </span>
              <h5 className="text-neutral-400">
                Access to the 5 existing lines.{" "}
              </h5>
            </div>
          </div>
          <PricebarMenuPromoCode />
          <PricebarMenuTotalPrice />

          <div className="w-full flex justify-between items-center ">
            <button className="bg-primary border-2 border-primary flex justify-center items-center rounded-[4px] py-2 text-white font-bold w-full">
              <a href="booking_detail.html"> Book Now </a>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PricebarMenu;
