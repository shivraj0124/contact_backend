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
  });

  const text = `Name: ${name}, Email: ${email}, Message: ${message}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "shivrajkolwankar0124@gmail.com",
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
