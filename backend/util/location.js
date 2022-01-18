const axios = require("axios");

const API_KEY = "981f694ceecddd194beacae5f67d68d7";

// async function getCoordinatesForAddress(address) {
//   const params = {
//     access_key: API_KEY,
//     query: address,
//   };

//   const response = await axios.get("https://api.positionstack.com/v1/forward", { params });

//   const data =response.data;

//   const coordinates = data.results[0];

//   return coordinates;


// }


function getCoordinatesForAddress(){
  const coordinates = {
    lat:"12 12A 78B 19",
    lng:"19 B38 BH892 12"
  }

  return coordinates;
}

module.exports = getCoordinatesForAddress;