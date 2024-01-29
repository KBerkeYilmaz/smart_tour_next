import './styles.css'

const ProgramDuration = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4 my-4 font-normal font-poppins text-[#4F4F4F] tracking-normal">
      <div className="flex justify-center items-center text-[15px] gap-1">
        <img
          src="public/bag-shopping-solid.svg"
          alt=""
        />
        <span>Full Day - 48 hours</span>
      </div>
      <div className="flex justify-center items-center text-[15px] gap-1">
        <img
          src="public/thumbs-up.svg"
          alt=""
        />
        <span>Free cancellation</span>
      </div>
    </div>
  );
};

export default ProgramDuration;