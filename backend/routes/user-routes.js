const express = require('express');
const  router = express.Router();
const  {check} = require("express-validator");

const userContoller = require('../controllers/users-controller');



router.get('/users/all',userContoller.getAllUsers);
router.get('/users/:uid',userContoller.getUserById);
router.post(
    '/users/signup',
    [
        check('name').not().isEmpty(),
        check('email').isEmail(),
        check('password').isLength({min:8})
    ],
    userContoller.signUp);

router.post(
    "/users/login",
    [
        check('email')
        .normalizeEmail() // TEST@gmail.com => test@gmail.com
        .isEmail(),
        check('password').isLength({min:8})
    ],
    userContoller.login);

module.exports = router;