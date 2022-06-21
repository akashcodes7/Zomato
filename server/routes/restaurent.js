const express = require('express');
const router = express.Router();
const restaurentController = require('../controllers/restaurent');

router
  .route('/')
  .get(restaurentController.restaurent)
  .post(restaurentController.postRestaurent);
router.route('/:id').get(restaurentController.restaurentGetById);

module.exports = router;
