const location = require('../models/location');

//@route Get /
//@desc Get all the restaurent data
//@access public
exports.location = async (req, res) => {
  const location = await location.find();
  console.log(location);
  res.send(location);
};

//@route Post /
//@desc posting the restaurent data
//@access public
exports.postlocation = async (req, res) => {
  try {
    const locationData = new location({
      location_id: req.body.id,
      location_name: req.body.name,
      state_id: req.body.state_id,
      state: req.body.state,
      country_name: req.body.country,
    });
    locationData.save();
    res.status(200).send({
      msg: 'Location added!',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: 'Location can not be added!',
    });
  }
};

//@route Get /
//@desc It will return the home page of the website
//@access public
exports.restaurent = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'Your are in userController',
  });
};

//@route Get /
//@desc It will return the home page of the website
//@access public
exports.mealType = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'Your are in userController',
  });
};

//@route Get /
//@desc It will return the home page of the website
//@access public
exports.menu = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'Your are in userController',
  });
};
