//@route Get /
//@desc Get all the restaurent data
//@access public
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'WelCome Home',
  });
});
module.exports = router;
