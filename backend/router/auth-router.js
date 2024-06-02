const express = require("express");
const authrouter=express.Router();
const { home } = require("../controller/authcontroller")

authrouter.route('/').get(home);

module.exports = authrouter;