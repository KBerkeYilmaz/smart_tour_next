const SidebarMenuHeader = () => {
  return (
    <div className="package-details-sidebar pt-5 w-full mb-8 flex justify-start items-center font-bold text-base font-poppins tracking-wide">
      <h1>Check Availability & Price</h1>
      <button
        id="package-sidebar-close-button"
        className="package-sidebar-close-button hidden"
      >
        <img
          src="public/xmark-solid.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default SidebarMenuHeader;
