const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//Importing routes
const placeRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");

//Importing models
const ErrorModel = require("./models/http-error");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api", placeRoutes);
app.use("/api", userRoutes);

//Error Handling for Unsupported routes
app.use((req, res, next) => {
  const error = new HttpError("Could not found this route", 404);
  throw error; //throw because its synchronus
});
// app.use("/allusers",userRoutes);

/*function with 4 parameter will be special middleware function
as an error handling middleware fucntion
*/
app.use((error, req, res, next) => {
  //Check if a response is sent
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 505);
  res.json({ message: error.message || "An Unkown Error Occurs" });
});
// app.use()

mongoose
  .connect("mongodb+srv://webRubik:test'OR'a'='a'@web-db.qjovo.mongodb.net/places?retryWrites=true&w=majority")
  .then(() => {
    app.listen(5000);
    console.log("Connection Success");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });

  // app.listen(5000);
