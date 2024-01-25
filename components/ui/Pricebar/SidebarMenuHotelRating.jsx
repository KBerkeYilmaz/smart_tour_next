const SidebarMenuHotelRating = ({ onRatingChange }) => {
  const handleInputChange = (event) => {
    onRatingChange(event.target.value);
  };

  return (
    <div className="mt-2 py-2">
      <div>
        <h3 className="font-poppins text-[#4A4A4A] text-sm">Hotel Rating</h3>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 max-w-10 min-h-8 items-center">
          <input
            type="radio"
            name="hotelRating"
            id="rating3"
            value="3"
            className="max-w-10 min-h-6 bg-bgAccent"
            onChange={handleInputChange}

          />
          <label
            htmlFor="rating3"
            className="text-sm"
          >
            3 *
          </label>
        </div>
        <div className="flex gap-2 max-w-10 min-h-8 items-center">
          <input
            type="radio"
            name="hotelRating"
            id="rating4"
            value="4"
            className="max-w-10 min-h-6 bg-bgAccent"
            onChange={handleInputChange}

          />
          <label
            htmlFor="rating4"
            className="text-sm"
          >
            4 *
          </label>
        </div>
        <div className="flex gap-2 max-w-10 min-h-8 items-center">
          <input
            type="radio"
            name="hotelRating"
            id="rating5"
            value="5"
            className="max-w-10 min-h-6 bg-bgAccent"
            onChange={handleInputChange}

          />
          <label
            htmlFor="rating5"
            className="text-sm"
          >
            5 *
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuHotelRating;
