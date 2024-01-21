const ListOptions = () => {
  return (
    <div
      className="flex justify-between items-center w-full mb-4 p-2"
      id="list-main-flex-info"
    >
      <h6>
        Showing 4 of <span className="text-primary">257 Tours</span>
      </h6>
      <div className="flex gap-4">
        <div className="flex gap-1 items-center">
          <h6>Sort By Recommended</h6>

          <img
            src="public/vector.svg"
            alt=""
          />
        </div>

        <button
          className="flex gap-1 items-center desktop:hidden"
          id="toggle-filter"
        >
          <h6>Filter</h6>
          <img
            src="vector.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default ListOptions;
