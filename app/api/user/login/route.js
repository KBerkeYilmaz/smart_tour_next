import { NextResponse } from "next/server";

// pages/api/user/route.js
export async function POST(req, res) {
  // if (req.method === 'POST') {
  //   // Extract data from the request body
  //   const data = req.body;

  //   // Use the API URL from the .env file
  //   const externalApiUrl = process.env.API_URL + '/login'; // Adjust 'endpoint' to your specific endpoint

  //   // Set up options for the fetch request
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Include the API key if needed, e.g., 'API-Key': process.env.YOUR_API_KEY_VARIABLE
  //     },
  //     body: JSON.stringify(data),
  //   };

  //   // Make the POST request to the external API
  //   try {
  //     const apiResponse = await fetch(externalApiUrl, requestOptions);
  //     const apiData = await apiResponse.json();

  //     // Send back the response from the external API to the client
  //     res.status(200).json(apiData);
  //   } catch (error) {
  //     // Handle any errors
  //     res.status(500).json({ error: 'Error making external API request' });
  //   }
  // } else {
  //   // Handle any non-POST requests
  //   res.setHeader('Allow', 'POST');
  //   res.status(405).end('Method Not Allowed');
  // }

  const data = await req.json();

  console.log(data);
  const responseData = {
    ...data,
    reply: "Hello back"
  };


  return NextResponse.json(responseData);
}
