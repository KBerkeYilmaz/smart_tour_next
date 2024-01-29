const PricebarMenuHeader = () => {
  return (
    <div className="booking-details-pricebar pt-5 w-full pb-2 flex justify-start items-center font-bold text-base font-poppins tracking-wide bg-white">
      <h1>Your Reservation</h1>
      <button
        id="booking-pricebar-close-button"
        className="booking-pricebar-close-button hidden"
      >
        <img
          src="public/xmark-solid.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default PricebarMenuHeader;
