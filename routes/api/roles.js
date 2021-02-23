const express = require('express');
const router = express.Router();
const rolesCtrl = require('../../controllers/roles');

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/addRole', checkAuth, rolesCtrl.addRole);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;