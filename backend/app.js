const express  = require("express");
const bodyParser = require('body-parser');

//Importing routes
const placeRoutes = require('./routes/places-routes');
const userRoutes = require('./routes/user-routes');

//Importing models
const ErrorModel = require("./models/http-error");

const app   = express();

app.use(bodyParser.json());

app.use("/api",placeRoutes);
// app.use("/allusers",userRoutes);

/*function with 4 parameter will be special middleware function
as an error handling middleware fucntion
*/
app.use((error,req,res,next)=>{
    //Check if a response is sent
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 505 );
    res.json({message :error.message || "An Unkown Error Occurs"});
});
// app.use()

app.listen(5000);
