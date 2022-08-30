const express = require('express')


//controllers

const {signupUser, loginUser} = require("../controllers/userController")

const router = express.Router()

//login route
router.post('/login',loginUser)


//signup
router.post('/signup',signupUser)

module.exports = router