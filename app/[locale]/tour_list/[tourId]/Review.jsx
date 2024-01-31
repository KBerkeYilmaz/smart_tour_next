const Review = () => {
  return (
    <section id="package-review-accordeon flex flex-col justify-start w-full h-full gap-[30px] mt-4 desktop:mt-0 h-full">
      <div className="flex justify-between items-center w-full mt-4">
        <h1 className="font-bold">User Ratings & Reviews</h1>
        <button className="px-2 text-[14px] text-white bg-primary desktop:px-4 desktop:py-3 font-semibold rounded-[4px]">
          Give Your Review
        </button>
      </div>
      <div className="flex flex-col justify-start items-center">
        <div className="flex justify-start items-center text-[15px] gap-4 w-full pt-4 pb-2">
          <img
            src="public/review-avatar-placeholder.png"
            alt=""
          />
          <span>5.0 Amazing</span>

          <span>Lorem ipsum dolor</span>
        </div>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </article>
      </div>

      <button className="text-primary">Read More...</button>
    </section>
  );
};

export default Review;
