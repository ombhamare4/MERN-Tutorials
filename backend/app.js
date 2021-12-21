const express  = require("express");
const bodyParser = require('body-parser');

//Importing routes
const placeRoutes = require('./routes/places-routes');

const app   = express();

app.use(placeRoutes);

// app.use()

app.listen(5000);
