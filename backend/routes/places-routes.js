const express = require("express");

/*express.Router()  is used when you want to create a new router
object in your  program to handle requests*/
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(" GET Request from Places-routes yo");
  res.json({ message: "It works" });
});


module.exports = router;