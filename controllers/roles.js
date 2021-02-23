const User = require("../models/user");



async function addRole(req, res) {

    console.log(req.body)
    console.log(req.user)
    try {
     user = await User.findById(req.user._id);
     console.log(user)
      await user.roles.push(req.body);
      await user.save();
      res.status(200).json("Okie");
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  }


module.exports = {
  addRole
};