const restaurent = require('../models/restaurent');

//@route Get /:id
//@desc Get by the id restaurent data
//@access public
exports.restaurentGetById = async (req, res) => {
  const data = await restaurent.find({ restaurant_id: req.params.id });
  //Tour.findOne({_id: req.params.id});
  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
};

//@route Get /
//@desc Get all the restaurent data
//@access public
exports.restaurent = async (req, res) => {
  const restaurentData = await restaurent.find();
  console.log(restaurentData);
  res.send(restaurentData);
};

//@route Post /
//@desc posting the restaurent data
//@access public
exports.postRestaurent = async (req, res) => {
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
