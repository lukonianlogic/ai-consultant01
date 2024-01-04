// submitForm.js

module.exports = (req, res) => {
  // Extract form data from the request
  const { contactName, contactEmail, contactSubject, contactMessage } = req.body;

  // Implement your email sending logic here (e.g., using nodemailer)
  const nodemailer = require('nodemailer');

// Create a transporter using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Your SMTP server (e.g., Gmail, Outlook, or your hosting provider's SMTP)
  port: 587, // Port for SMTP
  secure: false, // Set to true for secure connections (e.g., when using Gmail)
  auth: {
    user: 'lucas.longacre@gmail.com', // Your email address
    pass: 'txfu nhka ljsf qrva', // Your email password or app-specific password (if applicable)
  },
});

// Send email
const mailOptions = {
  from: 'lucas.longacre@gmail.com', // Sender's email address
  to: 'lucas.longacre@gmail.com', // Recipient's email address
  replyTo: contactEmail, // User's email address (Reply-To)
  subject: 'Contact Form Submission', // Email subject
  text: `Name: ${contactName}\n` +
        `Email: ${contactEmail}\n` +
        `Subject: ${contactSubject}\n` +
        `Message: ${contactMessage}`,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Error sending email' });
  } else {
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Form submitted successfully' });
  }
});


  // Respond to the client
  res.status(200).json({ message: 'Form submitted successfully' });
};

