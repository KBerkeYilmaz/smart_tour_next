const GuestDetails = () => {
  return (
    <div className="bg-white">
      <div className="py-[3%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 className="pb-[0.9rem] font-bold text-[35px] text-left">
          Guest Details
        </h3>
        <form action="">
          <div className="grid grid-rows-2 grid-cols-1 gap-[0.6rem]">
            <div className="w-full flex justify-start items-center gap-2">
              <label for="customer_title">Title</label>
              <select className="w-fit bg-[#f2f2f2] p-4 rounded-[5px]">
                <option
                  id="customer_title_mr"
                  className="w-full rounded-md bg-input text-white border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                >
                  Mr.
                </option>
                <option
                  id="customer_title_mrs"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                >
                  Mrs.
                </option>
                <option
                  id="customer_title_not_specified"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                >
                  Don't want to specify
                </option>
              </select>
            </div>

            <div className="w-full">
              <label for="first-name">Full Name as per Passport</label>
              <input
                id="first-name"
                type="text"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                placeholder="First Name"
              />
            </div>
            <div className="w-full">
              <input
                id="last-name"
                type="text"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                placeholder="Last Name"
              />
            </div>
            <div className="w-full">
              <label for="user-name">
                E-Mail
                <span className="text-[#9B9B9B]">
                  (Booking voucher will be sent to this email)
                </span>
              </label>
              <input
                id="user-name"
                type="text"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
              />
            </div>
            <div>
              <label for="user-password">Last Name</label>
              <input
                id="user-password"
                type="text"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
              />
            </div>
          </div>
          <div className="flex justify-between items-center my-[0.62rem]">
            <div className="flex gap-1 items-center">
              <img
                src="public/checkmark.svg"
                alt=""
              />
              <p>Keep me signed in</p>
            </div>
            <button className="text-primary">
              <a href="forgot_password.html">Forgot Password?</a>
            </button>
          </div>

          <button
            id="form-submit-btn"
            className="form-submit-btn w-full bg-primary text-white h-[3.12rem] rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuestDetails;
