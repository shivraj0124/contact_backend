const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendmail = (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, 
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 30000 // 30 seconds
  });

  const text = `Name: ${name}, Email: ${email}, Message: ${message}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "sk40fs@gmail.com",
    subject: "Contact Us",
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error.message);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendmail;
