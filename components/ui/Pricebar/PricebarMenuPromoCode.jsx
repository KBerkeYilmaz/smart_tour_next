const PricebarMenuPromoCode = () => {
  return (
    <div className="flex justify-start items-center">
      <input
        className="rounded-[4px] bg-[#F2F2F2] p-4 w-full"
        placeholder="Promo Code"
      />
      <button
        type="button"
        role="button"
        className="p-4 bg-primary text-white"
      >
        Apply
      </button>
    </div>
  );
};

export default PricebarMenuPromoCode;
