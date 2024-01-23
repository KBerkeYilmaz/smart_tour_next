"use client";

import React, { useState } from "react";

// async function fetchData() {
//   try {
//     const response = await fetch('https://www.gokamind.com/MedusaTurApi/all_tour', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxIiwiZmlyc3RfbmFtZSI6IkVyZW4gS2FcdTAxMWZhbiIsImxhc3RfbmFtZSI6IkF5ZFx1MDEzMW4iLCJlbWFpbCI6ImVyZW5rYWdhbmF5ZGluQGdtYWlsLmNvbSIsInJvbGVfaWQiOiIxIiwic3RhdHVzIjp0cnVlLCJBUElfVElNRSI6MTcwNTgxNDg0N30.uRkTjxUDiB0if-PiwVqunAbESdJcIUmmia2gZXkn_EQ,
//         'Accept-Language': 'turkish,tr'


//       },
//       // If you need to send data in the POST request, add a body property here
//       // body: JSON.stringify({ key: 'value' }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch error:', error);
//   }
// }

// fetchData();
fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(console.log);
            


const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(
        "https://www.gokamind.com/MedusaTurApi/register",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      console.log(data)
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      className="contact-panel lg:px-[8.15rem] w-screen flex justify-center items-center max-w-[1024px]"
      id="contact-panel"
    >
      <div className="py-[6%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 className="pb-[0.9rem] font-bold text-[35px] text-left">Sign Up</h3>
        {error && <div style={{ color: "red" }}>{error}</div>}

        <form
          id={"signup-form"}
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 gap-[0.6rem]">
            <div className="w-full grid grid-rows-2 grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div className="w-full">
                <label htmlFor="last_name">Second Name</label>
                <input
                  id="last_name"
                  type="text"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
              <div>
                <label htmlFor="phone_number">Mobile</label>
                <input
                  id="phone_number"
                  type="text"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
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
              <p>
                I agree to all the
                <a
                  href=""
                  className="text-primary cursor-pointer"
                >
                  Terms and Privacy Policies.
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-2 pb-2">
            Are you an agent?
            <a
              href="agent_signUp.html"
              className="cursor-pointer text-primary"
            >
              Click here
            </a>
          </div>
          <button
            className="w-full bg-primary text-white h-[3.12rem] rounded-md"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
