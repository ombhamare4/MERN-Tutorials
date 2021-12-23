const express = require('express');
const  router = express.Router();


const DUMMY_USERS = [
    {
        id:"u1",
        name:"Peter Parker",
        age:"21",
        placesVisited:"25"
    },
    {
        id:"u2",
        name:"MJ",
        age:"20",
        placesVisited:"19"
    }
]


router.get('/:uid',(req,res,next)=>{
    const uid = req.params.uid;
    console.log(uid);
    const users = DUMMY_USERS.find(u=>{
        return u.id === uid;
    });
    res.json({users});
});

module.exports = router;