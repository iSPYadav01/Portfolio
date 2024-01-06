// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
  
//   // Assuming you want to send the email to the recipient's email address
//   // const toEmail = email;
//   const toEmail = email;

//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, toEmail],  // Use the recipient's email dynamically
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }


import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    // Parse JSON data from the request body
    const { email, subject, message } = await req.json();

    // Log the received data (for debugging purposes)
    console.log(email, subject, message);

    // Add your desired processing logic here

    // Return a JSON response indicating success or any other relevant information
    return NextResponse.json({ success: true, message: "Request processed successfully" });
  } catch (error) {
    // Return a JSON response with the error information
    return NextResponse.json({ error: error.message || "Unknown error" });
  }
}
