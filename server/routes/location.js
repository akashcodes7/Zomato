const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location');

router
  .route('/')
  .get(locationController.location)
  .post(locationController.postlocation);

module.exports = router;
