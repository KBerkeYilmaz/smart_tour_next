"use client";

import { useState, useEffect } from "react";

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
// fetch('https://esacambalkon.com/asdasd.php')
// .then(res => res.json())
// .then(console.log);

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Accept-Language", "turkish,tr");

// // // myHeaders.append("Cookie", "ci_session=49779c9c6ce5853f0e2271a74fa97dc42fd87c27");

// const raw = JSON.stringify({
//   first_name: "Foo",
//   last_name: "Bar",
//   email: "test_frontend6@gmail.com",
//   phone_number: "9055122096236s",
//   password: "123456",
//   role: "3",
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   mode: "no-cors", // bu kısım
//   body: raw,
//   redirect: "follow",
// };

// fetch("https://www.gokamind.com/MedusaTurApi/register", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

const SignupForm = ({ rawData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // OnChange handlers for each input
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Form submission

  async function onSubmit(event) {
    event.preventDefault();
    // setIsLoading(true);
    // setError(null);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept-Language", "turkish,tr");

    // Setup headers and form data
    // const raw = JSON.stringify({
    //   first_name: firstName,
    //   last_name: lastName,
    //   email: email,
    //   phone_number: phoneNumber,
    //   password: password,
    //   role: "3",
    // });
    // const raw = JSON.stringify({
    //   first_name: "Foo",
    //   last_name: "Barz",
    //   email: "test_frontend6@gmail.com",
    //   phone_number: "9055122096226",
    //   password: "123456",
    //   role: "3",
    // });

    // console.log(raw);

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   mode: "no-cors", // bu kısım
    //   body: raw,
    //   redirect: "follow",
    // };

    // console.log(requestOptions);

    // fetch("https://www.gokamind.com/MedusaTurApi/register", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   mode: "no-cors", // bu kısım
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch("https://www.gokamind.com/MedusaTurApi/register", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
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
                  onChange={handleFirstNameChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={firstName}
                  type="text"
                />
              </div>
              <div className="w-full">
                <label htmlFor="last_name">Second Name</label>
                <input
                  id="last_name"
                  onChange={handleLastNameChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={lastName}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  onChange={handleEmailChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={email}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="phone_number">Mobile</label>
                <input
                  id="phone_number"
                  onChange={handlePhoneNumberChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={phoneNumber}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={handlePasswordChange}
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
              value={password}
              type="password"
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
