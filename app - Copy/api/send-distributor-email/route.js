// app/api/send-distributor-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      firmName, 
      address, 
      area, 
      city, 
      poBox, 
      contactPerson, 
      contactNumber, 
      email,
      recipient,
      subject
    } = data;

    // Validate required fields
    if (!firmName || !contactPerson || !contactNumber || !email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter
    // Note: You'll need to replace these credentials with your actual email service details
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Create email content with a nicely formatted HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h1 { color: #f97316; margin-bottom: 20px; }
            h2 { color: #1e3a8a; margin-top: 30px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .footer { margin-top: 30px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>New Distributor Application</h1>
            <p>A new distributor application has been submitted with the following details:</p>
            
            <table>
              <tr>
                <th>Field</th>
                <th>Information</th>
              </tr>
              <tr>
                <td>Firm Name</td>
                <td>${firmName}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>${address}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>${area}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>${city}</td>
              </tr>
              <tr>
                <td>P.O. Box</td>
                <td>${poBox}</td>
              </tr>
              <tr>
                <td>Contact Person</td>
                <td>${contactPerson}</td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td>${contactNumber}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${email}</td>
              </tr>
            </table>
            
            <p>Please contact the applicant to proceed with the distributor application process.</p>
            
            <div class="footer">
              <p>This email was sent automatically from the Nyati Cement website distribution form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email message configuration
    const message = {
      from: process.env.EMAIL_FROM || 'website@lakecement.co.tz',
      to: recipient,
      subject: subject,
      html: htmlContent,
      // Also include a text version for email clients that don't support HTML
      text: `
New Distributor Application

Firm Name: ${firmName}
Address: ${address}
Area: ${area}
City: ${city}
P.O. Box: ${poBox}
Contact Person: ${contactPerson}
Contact Number: ${contactNumber}
Email: ${email}

Please contact the applicant to proceed with the distributor application process.
      `,
    };

    // Send the email
    await transporter.sendMail(message);

    // Return success response
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}