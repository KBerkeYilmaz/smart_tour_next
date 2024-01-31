"use client";
import { useState } from "react";
import { NextResponse, NextRequest } from "next/server";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Accept-Language", "turkish,tr");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submission started");

    // try {
    //   const myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append(
    //     "Cookie",
    //     "ci_session=435922e37e79039a72263c3c3d80c5c46022b73b"
    //   );

    //   // Log each header
    //   console.log("Headers:");
    //   myHeaders.forEach((value, key) => {
    //     console.log(`${key}: ${value}`);
    //   });

    //   const raw = JSON.stringify({
    //     email: "erenkaganaydin@gmail.com",
    //     password: "123456",
    //   });
    //   console.log("Request body:", raw);

    //   const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };
    //   console.log("Request options:", requestOptions);

    //   const response = await fetch(
    //     "https://www.gokamind.com/MedusaTurApi/login",
    //     requestOptions
    //   );
    //   console.log("Fetch response:", response);

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log("Response JSON:", result);
    //   } else {
    //     console.log("Fetch response error, status:", response.status);
    //   }
    // } catch (error) {
    //   console.error("Error during fetch operation:", error);
    // }
    // try {
    //   const response = await fetch(
    //     "https://www.gokamind.com/MedusaTurApi/tour_categories"
    //   );
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   console.log(data); // Handle the data as needed
    // } catch (error) {
    //   console.error("Fetch error: ", error);
    // }
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "erenkaganaydin@gmail.com",
          password: "123456",
        }),
      };

      const response = await fetch(
        "https://www.gokamind.com/MedusaTurApi/login",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  return (
    <form
      className="sign-in-form lg:px-[8.15rem]  w-screen flex justify-center items-center max-w-[1024px]"
      id="sign-in-form"
      onSubmit={handleSubmit}
    >
      <div className="py-[15%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 className="pb-[0.9rem] font-bold text-[35px] text-left">Sign In</h3>

        <div className="grid grid-rows-2 grid-cols-1 gap-[0.6rem]">
          <div className="w-full">
            <label htmlFor="user-email">E-Mail</label>
            <input
              id="user-email"
              type="email"
              onChange={handleEmailChange}
              name="email"
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
            />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <input
              id="user-password"
              type="password"
              name="password"
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-[0.62rem]">
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

        <span>
          Don't have an account?{" "}
          <a
            href="/sign_up"
            className="text-primary"
          >
            Register
          </a>
        </span>
        <span>
          Don't have an agente account?{" "}
          <a
            href="agent_signUp.html"
            className="text-primary"
          >
            Register
          </a>
        </span>
      </div>
    </form>
  );
};

export default SigninForm;
