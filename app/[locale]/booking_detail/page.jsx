import { React } from "react";
import tourData from "../../../dummy_tour_id.json";
import PricebarMenuRoot from "@components/ui/Pricebar/PricebarMenuRoot";
import BookingDetail from "./BookingPanel";
import { unstable_setRequestLocale } from "next-intl/server";

const booking_detail = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  console.log(tourData);

  return (
    <main className="bg-[#F2F2F2] flex justify-center items-baseline w-screen py-16 relative">
      {/* <!-- DETAILS CONTAINER --> */}
      <BookingDetail />
      {/* {/* <!-- DETAILS CONTAINER END --> */}
      <PricebarMenuRoot />

      {/* <!-- SIDEBAR END --> */}
    </main>
  );
};

export default booking_detail;
