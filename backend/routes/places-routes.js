const express = require("express");
const { check } = require("express-validator");
/* 'check'  is method and funnction
 we can execute it will return a new middleware
 configure for our validation
 */

const placesController = require("../controllers/places-controller");

/*express.Router()  is used when you want to create a new router
object in your  program to handle requests*/
const router = express.Router();

router.get("/places",placesController.places);

router.get("/places/:pid", placesController.getPlaceById);

router.get("/usersplace/:uid", placesController.getPlaceByUserId);

router.post(
    "/places",
    [
        check('title').not().isEmpty(),
        check('description').isLength({min:5}),
        check('address').not().isEmpty()
    ],
    placesController.createPlace);

router.patch(
    "/places/:pid",
    [
        check('title').not().isEmpty(),
        check('description').isLength({min:5}),
    ],
    placesController.updatePlace);

router.delete("/places/:pid", placesController.deletePlace);

module.exports = router;
