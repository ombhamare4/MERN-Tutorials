const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlacesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String },
  location: {
    lat: { type: String },
    lng: { type: String },
  },
  creator: { type: String, required: true },
});

module.exports = mongoose.model("Place", PlacesSchema);
