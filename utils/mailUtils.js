const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendmail = (name, email,message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });
  let text = "";
  text = `Name: ${name}, Email: ${email}, Message: ${message}`
  const mailOptions = {
    from: process.env.email,
    to: "sk40fs@gmail.com",
    subject: "Contact Us",
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
     
    } else {
      console.log("Email sent: " + info.response);
     
    }
  });
};

module.exports = sendmail;