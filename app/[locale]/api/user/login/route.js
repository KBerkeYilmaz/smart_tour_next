import { NextResponse, NextRequest } from "next/server";

// pages/api/user/route.js
export async function POST(req, res) {
  const data = await req.json();

  //   // Use the API URL from the .env file
  const externalApiUrl = "https://www.gokamind.com/MedusaTurApi/login;"; // Adjust 'endpoint' to your specific endpoint

  //   // Set up options for the fetch request
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    Host: "www.gokamind.com",
    Accept: "*/*",
    // body: JSON.stringify(data),
    body: JSON.stringify({
      email: "erenkaganaydin@gmail.com",
      password: "123456",
    }),
  };

  // Make the POST request to the external API
  try {
    const apiResponse = await fetch(externalApiUrl, requestOptions);
    const apiData = await apiResponse.json();
    // Send back the response from the external API to the client
    res.status(200).json(apiData);
    return NextResponse.json(apiData);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Error making external API request" });
  }
}

//   const responseData = {
//     ...data,
//     reply: "Request Successful",
//   };
