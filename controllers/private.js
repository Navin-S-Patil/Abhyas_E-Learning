const User = require("../models/User");

exports.getPrivateData = (req, res, next) => {

  const data = User.getUsername();

  res.status(200).json({
    success: true,
    data: data,
  });
};
