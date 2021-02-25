const User = require("../models/user");

async function addRole(req, res) {
  console.log(req.body);
  console.log(req.user);
  try {
    user = await User.findById(req.user._id);
    console.log(user);
    await user.roles.push(req.body);
    await user.save();
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function index(req, res) {
  user = await User.findById(req.user._id);
  const roles = user.roles;
  res.status(200).json(roles);
}

async function deleteRole(req, res) {
  console.log(req.params.id);
  user = await User.findById(req.user._id);
  user.roles = user.roles.filter((role) => role._id != req.params.id);
  await user.save();
  res.status(200).json(user.roles);
}

async function addHabit(req, res) {
  console.log(req.body);
  try {
    user = await User.findById(req.user._id);
    user.roles.forEach(role => {
        if(role._id == req.params.id) {
            console.log(role)
            role.habits.push(req.body)
        }
    });
    await user.save();
    res.status(200).json(user.roles);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = {
  addRole,
  index,
  delete: deleteRole,
  addHabit
};
