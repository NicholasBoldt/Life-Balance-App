const express = require('express');
const router = express.Router();
const rolesCtrl = require('../../controllers/roles');

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.get('/', checkAuth, rolesCtrl.index);
router.post('/addRole', checkAuth, rolesCtrl.addRole);
router.delete('/:id', checkAuth, rolesCtrl.deleteRole);

router.post('/:id/addHabit', checkAuth, rolesCtrl.addHabit);
router.post('/:id/addTask', checkAuth, rolesCtrl.addTask);
router.delete('/deleteTask/:id', checkAuth, rolesCtrl.deleteTask);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;