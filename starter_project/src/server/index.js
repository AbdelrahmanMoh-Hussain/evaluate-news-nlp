var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key
app.use(express.static("dist"));

app.get("/", function (req, res) {
  console.log("HERE GET")
  res.sendFile("./dist/index.html");
});
const formdata = new FormData();
const data = {}
app.get('/get', (req, res) => {
  console.log("HERE TO GET")
  console.log(data)
  res.send(data);
});
// POST Route
app.post("/add", (req, res) => {
  console.log("HERE POST")
  console.log(req.body)
  // formdata.append("key", process.env.API_KEY);
  // formdata.append("txt", req.body.text);
  // formdata.append("lang", "en");
  data.key = process.env.API_KEY;
  data.txt = req.body.text;
  data.lang = "en";

  console.log(formdata);
  res.send({success: true});
});

// Designates what port the app will listen to for incoming requests
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
