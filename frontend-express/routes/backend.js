const express = require("express");
const axios = require("axios");
const router = express.Router();
var logger = require('../config/logger');

router.get("/", async (req, res, next) => {
    logger.info("Calling the backend-flask service..." + process.env.BACKEND_SERVICE);
    try {
    	let result = await axios.get(process.env.BACKEND_SERVICE);
    	res.send(result.data);
    }
    catch(err){
    	console.error(err)
    }
})

module.exports = router;