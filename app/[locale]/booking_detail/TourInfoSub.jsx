import tourData from "../../../dummy_tour_id.json";



const TourInfoSub = () => {
  return (
    <div
            class="flex gap-[1.875rem] flex-col tablet:flex-row"
            id="tour-info-selected-item-wrapper"
          >
            <div
              class="flex flex-col gap-2 w-full tablet:w-1/2 bg-[#F2F2F2] p-[0.938rem] justify-center"
              id="tour-dates"
            >
              <h5>Tour Dates</h5>
              <div class="flex gap-[1.875rem] flex-col tablet:flex-row">
                <h5>Fri <span class="font-bold">18 Aug</span> 2023</h5>
                <h5>Sun <span class="font-bold">20 Aug</span> 2023</h5>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 w-full tablet:w-1/2 font-poppins p-[0.938rem] justify-center"
              id="tour-people"
            >
              <h5>Fri <span class="font-bold">2 Nights</span> 2023</h5>
              <div class="flex gap-[1.875rem]">
                <h5>
                  <span
                    class="font-bold"
                    id="tour-adult-count"
                    >9
                  </span>
                  Adult
                </h5>
                <h5>
                  <span
                    class="font-bold"
                    id="tour-children-count"
                    >4</span
                  >
                  Children
                </h5>
              </div>
            </div>
          </div>

  );
};

export default TourInfoSub;