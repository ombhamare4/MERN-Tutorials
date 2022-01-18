const uuid = require("uuid").v4;
const {validationResult} = require('express-validator');

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Tom Holland",
    email: "peterfarfromhome@gmail.com",
    password: "tom",
  },
  {
    id: "u2",
    name: "Andrew Garfield",
    email: "amazingspiderman3@gmail.com",
    password: "andrew",
  },
  {
    id: "u3",
    name: "Tobey Maguire",
    email: "spiderman@gmail.com",
    password: "tobey",
  },
];

// const DUMMY_USERS  = []

//Get Request
const getAllUsers = (req, res, next) => {
  if (DUMMY_USERS.length === 0) {
    throw new HttpError("No User Found", 404);
  }
  res.json({ DUMMY_USERS });
};

//Get Request
const getUserById = (req, res, next) => {
  const uid = req.params.uid;
  console.log(uid);
  const users = DUMMY_USERS.find((u) => {
    return u.id === uid;
  });

  res.json({ users });
};

//Patch
const signUp = (req, res, next) => {

  const error = validationResult(req);
  if(!error.isEmpty()){
      throw new HttpError("Invalid Sign Up Credentials",422);
  }

  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((user) => user.email === email);

  if (hasUser) {
    throw new HttpError("User with this email exist plz change email", 422);
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };
  // console.log(req.body);
  DUMMY_USERS.push(createdUser);
  res.status(201).json({ DUMMY_USERS });
};

//Post
const login = (req, res, next) => {
  const error = validationResult(req);
  if(!error.isEmpty()){
      throw new HttpError("Invalid Sign Up Credentials",422);
  }
  const { email, password } = req.body;
  const userFound = DUMMY_USERS.find((user) => user.email === email);
  console.log("User Found? :" + userFound);
  if (!userFound || userFound.password !== password) {
    throw new HttpError("Could not found a user,Credential wrong", 401);
  }

  res.json({ message: "User Found" });
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.signUp = signUp;
exports.login = login;
