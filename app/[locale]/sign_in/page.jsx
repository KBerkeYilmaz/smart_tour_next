const SignIn = () => {
    return (     <main class="flex justify-center items-center w-screen">
    <section
      class="contact-panel lg:px-[8.15rem] w-screen flex justify-center items-center max-w-[1024px]"
      id="contact-panel"
    >
      <div class="py-[6%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 class="pb-[0.9rem] font-bold text-[35px] text-left">Sign Up</h3>
        <form action="">
          <div class="grid grid-cols-1 gap-[0.6rem]">
            <div class="w-full grid grid-rows-2 grid-cols-2 gap-4">
              <div>
                <label for="first-name">First Name</label>
                <input
                  id="first-name"
                  type="text"
                  class="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div class="w-full">
                <label for="second-name">Second Name</label>
                <input
                  id=" Second Name"
                  type="text"
                  class="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label for="e-mail">Email</label>
                <input
                  id="e-mail"
                  type="text"
                  class="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label for="mobile">Mobile</label>
                <input
                  id="mobile"
                  type="text"
                  class="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
            </div>
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="password"
              type="text"
              class="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
            />
          </div>
          <div class="flex justify-between items-center my-[0.62rem]">
            <div class="flex gap-1 items-center">
              <img
                src="public/checkmark.svg"
                alt=""
              />
              <p>
                I agree to all the
                <a
                  href=""
                  class="text-primary cursor-pointer"
                  >Terms and Privacy Policies.
                </a>
              </p>
            </div>
          </div>
          <div class="flex gap-2 pb-2">
            Are you an agent?
            <a
              href="agent_signUp.html"
              class="cursor-pointer text-primary"
              >Click here</a
            >
          </div>
          <button
            class="w-full bg-primary text-white h-[3.12rem] rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
)
}

export default SignIn