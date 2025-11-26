const express = require("express");
const aqiController = require("../../controllers/aqi.controller");
const router = express.Router();

router.get("/getAqi/:cityName",aqiController.getAqiByCity);
router.get("/cities", aqiController.getCachedCities);


module.exports=router