const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
    	let result = await axios.get(process.env.BACKEND_SERVICE);
    	res.send(result.data);
    }
    catch(err){
    	console.error(err)
    }
})

module.exports = router;