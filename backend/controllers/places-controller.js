const uuid = require("uuid").v4;
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const getCoordinatesForAddress = require("../util/location");
const Place = require("../models/places");

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire Building",
    description: "Its a building in neew york ",
    location: {
      lat: "12 45 678",
      lng: "56 12 093",
    },
    address: "20 W 43t, New York , NY 1001",
    creator: "u1",
  },
  {
    id: "p2",
    title: "Tokyo Tower",
    description: "Its a tower in Tokyo",
    location: {
      lat: "34 567 31",
      lng: "98 21 345",
    },
    address: "20 W 43t, New York , NY 1001",
    creator: "u2",
  },
  {
    id: "p3",
    title: "Narakumi Shrine",
    description: "Inazuma main islnad",
    location: {
      lat: "34 567 31",
      lng: "98 21 345",
    },
    address: "20 W 43t, New York , NY 1001",
    creator: "u2",
  },
];

//Get All Places

const places = async (req, res, next) => {
  let place;
  try {
    place = await Place.find().exec();
  } catch (err) {
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
  res.json(place);
};

//Get Request
const getPlaceById = async (req, res, next) => {
  // console.log(" GET Request from Places-routes yo");
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId).exec();
  } catch (err) {
    const error = new HttpError(
      "Someting Went Wrong, Could not found places",
      500
    );
    return next(error);
  }

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404)
    );
    // return res.status(404).json({ message: "Could not found user" });
  }

  res.json({ place: place.toObject({ getters: true }) }); //Converting Database object data  to normal javascript object and converting _id to normal ID.
};

//Get Request
const getPlaceByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  const places = await Place.find({ creator: userId });
  if (!places || places.length == 0) {
    return next(
      new HttpError("Could not find a users for the provided id.", 404)
    );
  }
  // console.log(places);
  //find return array so convert it into object
  res.json({
    places: places.map((place) => place.toObject({ getters: true })),
  });
};

//Post request. It require request body
const createPlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    // res.status(422).json({error});
    next(new HttpError("Invalid Data, Please Check your data", 422));
  }
  const { title, description, address, creator } = req.body;

  // let coordinates;
  try {
    var coordinates = await getCoordinatesForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = new Place({
    title,
    description,
    location: coordinates,
    // address,
    image: "shorturl.at/efoAM",
    creator,
  });

  console.log(createdPlace);

  try {
    await createdPlace.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Places Failed, please try again",
      500
    );
    return next(error);
  }

  res.status(201).json({ createdPlace });
};

//For patch request we required req.body
const updatePlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    // res.status(422).json({error});
    throw new HttpError("Invalid Data, Please Check your data", 422);
  }

  const { title, description, address } = req.body;
  const placeId = req.params.pid;
  let UpdatePlace;
  try {
    UpdatePlace = await Place.findByIdAndUpdate(placeId, {
      $set: {
        title,
        description,
        address,
      },
    });
  } catch (err) {
    return next(
      new HttpError("Something Went Wrong, Please try again later", 500)
    );
  }

  // const updatePlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  // const PlaceIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);

  // updatePlace.title = title;
  // updatePlace.description = description;

  // DUMMY_PLACES[PlaceIndex] = updatePlace;
  res.status(200).json({ place: UpdatePlace.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  let DeletePlace;

  try {
    Place.findByIdAndRemove(placeId, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Removed User : ", docs);
      }
    });
  } catch (err) {
    return next(new HttpError("Something Went Wrong, Please Try Again", 500));
  }

  // DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Place Deleted" });
};

exports.places = places;
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
