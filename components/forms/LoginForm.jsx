const LoginForm = () => {
  return (
    <div className="bg-white">
      <div className="py-[3%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 className="pb-[0.9rem] font-bold text-[35px] text-left">Login</h3>
        <form
          action=""
          className="flex flex-col gap-4"
        >
          <div className="w-full">
            <label for="user-name">E-Mail </label>

            <input
              id="user-name"
              type="text"
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
            />
          </div>
          <div>
            <label for="user-password">Password</label>
            <input
              id="user-password"
              type="text"
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
            />
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
            Login
          </button>
        </form>
        <span>
          Don't have an account?
          <a
            href="user_signUp.html"
            className="text-primary"
          >
            Register
          </a>
        </span>
        <span>
          Don't have an agente account?
          <a
            href="agent_signUp.html"
            className="text-primary"
          >
            Register
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
