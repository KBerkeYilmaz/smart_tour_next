const SideBarMenuPromoCode = () => {
    return(
        <div className="flex justify-start items-center">
              <input
                className="rounded-[4px] bg-[#F2F2F2] p-4"
                placeholder="Promo Code"
              />
              <button
                type="button"
                role="button"
                className="p-4 bg-primary"
              >
                Apply
              </button>
            </div>
    )
}

export default SideBarMenuPromoCode;