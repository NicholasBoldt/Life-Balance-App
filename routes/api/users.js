const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
router.post('/get', usersCtrl.getUserFromId);

/*----- Helper Functions -----*/
// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
//   }


module.exports = router;