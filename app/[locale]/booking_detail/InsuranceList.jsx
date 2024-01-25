const InsuranceList = () => {
  return (
    <div
      className="tour-info-optionals px-[1rem] pb-[1rem] bg-[#FAFBFC]"
      id="tour-info-optionals"
    >
      <h2 className="w-full flex justify-start text-lg font-semibold">
        Insure It!
      </h2>
      <div className="tour-info-optionals-item py-[0.625rem] flex w-full justify-start items-center gap-6 border-b-2 border-slate-200">
        <div className="tour-info-radio-btn w-1/12 flex items-center justify-center">
          <input
            type="radio"
            className="radio-btn"
            id="radio-btn-2"
            value="not-selected"
          />
        </div>
        <div className="w-9/12">
          <h5
            className="font-semibold"
            id="tour-info-optionals-title-1"
          >
            Pay in full
          </h5>
          <h6
            className="text-black"
            id="tour-info-optionals-detail-1"
          >
            <span>Pay the total and you are all set</span>
          </h6>
        </div>
      </div>
      <div className="tour-info-optionals-item py-[0.625rem] flex w-full justify-start items-center gap-6 border-b-2 border-slate-200">
        <div className="tour-info-radio-btn w-1/12 flex items-center justify-center">
          <input
            type="radio"
            className="radio-btn"
            id="radio-btn-2"
            value="not-selected"
          />
        </div>
        <div className="w-9/12">
          <h5
            className="font-semibold"
            id="tour-info-optional-title-2"
          >
            Pay part now, part later
          </h5>
          <h6
            className="text-black"
            id="tour-info-default-detail-2"
          >
            Pay ₹10,200 now, and the rest (₹70,000) will be automatically
            charged to the same payment method on Jul 27, 2023. No extra fees.
          </h6>
        </div>
      </div>
      <div className="tour-info-optionals-item py-[0.625rem] flex w-full justify-start items-center gap-6 border-b-2 border-slate-200">
        <div className="tour-info-radio-btn w-1/12 flex items-center justify-center">
          <input
            type="radio"
            className="radio-btn"
            id="radio-btn-2"
            value="not-selected"
          />
        </div>
        <div className="w-9/12">
          <h5
            className="font-semibold"
            id="tour-info-optional-title-3"
          >
            Insure It
          </h5>
          <h6
            className="text-black"
            id="tour-info-default-detail-3"
          >
            <span>9 Adults</span> , <span> 1 Children</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default InsuranceList;
