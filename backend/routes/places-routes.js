const express = require("express");

const placesController = require('../controllers/places-controller');


/*express.Router()  is used when you want to create a new router
object in your  program to handle requests*/
const router = express.Router();



router.get("/places/:pid", placesController.getPlaceById);

router.get("/users/:uid",placesController.getPlaceByUserId );

router.post('/places',placesController.createPlace);

module.exports = router;
