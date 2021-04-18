const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { default: tokenService } = require("../src/utils/tokenService");
const SECRET = process.env.SECRET;

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user._id);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user._id);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function getUserFromId(req, res) {
  try {
    const userId = await tokenService.getUserFromToken();
    const user = await User.findOne({ _id: userId});
    return user;
  } catch (err) {
    return res.status(400).json(err);
  }
}




module.exports = {
  signup,
  login,
  getUserFromId
};
  
