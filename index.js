const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const bodyParser = require("body-parser");
const sendmail = require("./utils/mailUtils")
app.use(bodyParser.json());
app.use(
  cors({
    // origin: "http://localhost:5173",
    // origin: "*",
    origin: "https://shivrajkolwankar.netlify.app",
    methods: ["POST", "GET", "DELETE", "PUT", "HEAD", "PATCH"],
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.post("/api/contactUs", async (req, res) => {
  //console.log("vycy", req.body);
  try {
    //console.log("qwer", req.body);
    const { email, name, message } = req.body;
    console.log(req.body);
    sendmail(name, email, message);
    res.send({
        status:true,
        message:"Message sent successfully!"
      })
  } catch (err) {
    console.log(err);
    res.send({
        status:false,
        message:err
      })
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
