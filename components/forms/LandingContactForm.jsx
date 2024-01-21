const LandingContactForm = () => {
    return(      <section
        className="contact-panel lg:px-[8.15rem] w-screen flex justify-center items-center"
        id="contact-panel"
      >
        <div className="py-[40px] px-[1.87rem] flex flex-col gap-[8px] w-full">
          <h3 className="pb-[0.9rem] font-bold text-[35px] text-center">
            We'll reply in less than 24hrs. Contact us Now!
          </h3>
          <form action="">
            <div
              className="grid mobile:grid-rows-6 mobile:grid-cols-1 tablet:grid-rows-2 tablet:grid-cols-2 gap-[0.6rem]"
            >
              <div className="w-full">
                <label for="first-name-contact">First Name</label>
                <input
                  type="text"
                  id="first-name-contact"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label for="last-name-contact">Last Name</label>
                <input
                  type="text"
                  id="last-name-contact"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label for="email-adress-contact">Email Adress</label>
                <input
                  type="text"
                  id="email-adress-contact"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label for="mobile-contact">Phone Number</label>
                <input
                  type="text"
                  id="mobile-contact"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label for="arrival-contact">Arrival Date</label>
                <input
                  type="date"
                  id="arrival-contact"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label for="number-traveler-contact">Number of Travelers</label>
                <input
                  type="number"
                  id="number-traveler-contact"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
            </div>
            <div className="my-2">
              <label for="message-contact">Message</label>
              <input
                type="text"
                id="message-contact"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
              />
            </div>
            <div className="flex gap-2 my-[0.62rem] items-center">
              <input
                type="checkbox"
                id="termsCheckbox"
                name="termsCheckbox"
                className="w-4 h-4"
              />
              <label
                for="termsCheckbox"
                className="flex items-center gap-2"
              >
                <p>I agree to the terms and conditions.</p>
              </label>
            </div>

            <button className="w-full bg-primary text-white h-[3.12rem] rounded-md">
              Send
            </button>
          </form>
        </div>
      </section>

)
}

export default LandingContactForm;