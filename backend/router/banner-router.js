const express = require("express");
const bannerrouter=express.Router();
const { home } = require("../controller/bannercontroller")

bannerrouter.route('/').get(home);

module.exports = bannerrouter;