
const express = require('express');
const { startCreatingWithParam, buildSetup } = require('../src/main');
const router = express.Router()

router.post('/create', (req, res) => {
    console.log(req.body); //"0:Backgrounds-1:Body-0:JerseyNumber-0:JerseyStreetwear-0:Mouth-0:OutterFrame-0:TeamCountryCity-0:TeamName"
    startCreatingWithParam("0:Backgrounds-1:Body-0:JerseyNumber-0:JerseyStreetwear-0:Mouth-0:OutterFrame-0:TeamCountryCity-0:TeamName");
    return req.body;
})
  
module.exports = router;