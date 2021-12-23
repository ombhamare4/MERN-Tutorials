const uuid = require('uuid').v4;
const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
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


//Get Request
const getPlaceById = (req, res, next) => {
  // console.log(" GET Request from Places-routes yo");
  const placeId = req.params.pid;
  console.log(placeId);
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404)
    );
    // return res.status(404).json({ message: "Could not found user" });
  }
  // else {
  //   res.json({ place });
  // }
  /*It help us find a specific elements in array.
   */
  res.json({ place });
};


//Get Request
const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const users = DUMMY_PLACES.find((u) => {
    return u.creator === userId;
  });

  if (!users) {
    return next(
      new HttpError("Could not find a users for the provided id.", 404)
    );
  }

  res.json({ users });
};


//Post request. It require request body
const createPlace = (req,res,next) => {
    const {title,description,coordinates,address,creator} = req.body;
    const createdPlace = {
        id:uuid(),
        title,
        description,
        location : coordinates,
        address,
        creator,
    };
    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({createdPlace});
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;