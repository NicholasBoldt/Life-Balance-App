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
router.put('/:id/updateHabit', checkAuth, rolesCtrl.updateHabit);
router.delete('/:id/deleteHabit', checkAuth, rolesCtrl.deleteHabit);
router.get('/moveUpHabit/:id', checkAuth, rolesCtrl.moveUpHabit);
router.post('/completeHabit/:id', checkAuth, rolesCtrl.completeHabit);
router.get('/getStreak/:id', checkAuth, rolesCtrl.calculateStreak);
router.get('/resetHabits', checkAuth, rolesCtrl.resetHabits);

router.post('/:id/addTask', checkAuth, rolesCtrl.addTask);
router.delete('/deleteTask/:id', checkAuth, rolesCtrl.deleteTask);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;