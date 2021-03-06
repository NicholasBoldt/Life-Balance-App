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

async function updateHabit(req, res) {
    console.log(req.body);
    try {
      user = await User.findById(req.user._id);
      console.log("user: ", user)
      user.roles.forEach(role => {
          role.habits.forEach(habit => {
            if(habit._id == req.params.id) {
                console.log(habit._id)
                console.log(habit)
                habit.name = req.body.name,
                habit.amount = req.body.amount
            } else {
                console.log("Habit not found")
            }
          });
      });
      await user.save();
      res.status(200).json(user.roles);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  async function deleteHabit(req, res) {
    user = await User.findById(req.user._id);
    user.roles.forEach(function(role) {
        const idx = role.habits.findIndex(habit => {
            console.log("habitid:", habit._id)
            console.log("params:", req.params.id)
            return habit._id == req.params.id});
        console.log(idx);
        if(idx != -1) {
            role.habits.splice(idx, 1);
        }
    });
    await user.save();
    res.status(200).json(user.roles);
  }

async function addTask(req, res) {
    console.log(req.body);
    try {
      user = await User.findById(req.user._id);
      user.roles.forEach(role => {
          if(role._id == req.params.id) {
              console.log(role)
              role.tasks.push(req.body)
          }
      });
      await user.save();
      res.status(200).json(user.roles);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
  
  async function deleteTask(req, res) {
    user = await User.findById(req.user._id);
    user.roles.forEach(function(role) {
        const idx = role.tasks.findIndex(task => {
            console.log("taskid:", task._id)
            console.log("params:", req.params.id)
            return task._id == req.params.id});
        console.log(idx);
        if(idx != -1) {
            role.tasks.splice(idx, 1);
        }
    });
    await user.save();
    res.status(200).json(user.roles);
  }

   async function calculateStreak(req, res) {
    user = await User.findById(req.user._id);
    dates = [];
    user.roles.forEach((role) => {
      role.habits.forEach((habit) => {
        if (habit.id == req.params.id) {
            console.log("dates:", habit.completed_dates)
          dates = habit.completed_dates;
        }
      });
    });
    let current_date = new Date()
    current_date.setHours(0,0,0,0)
    let streak = 0
    for (let i = dates.length -1; i >= 0; i--) {
        while(i >= 0 && dates[i].getTime() == current_date.getTime()) {
            streak++
            i--
            current_date.setDate(current_date.getDate() - 1)
        }
    }
    console.log(streak)
    res.status(200).json(streak);
}

  async function completeHabit(req, res) {
    user = await User.findById(req.user._id);
    user.roles.forEach(function(role) {
        role.habits.forEach(function(habit) {
            if (habit.id === req.params.id) {
              console.log(habit.completed);
              if (habit.completed) {
                habit.completed = false;
                user.save();
                res.status(200).json(user.roles);
              } else {
                habit.completed = true;
                let today = new Date();
                today.setHours(0, 0, 0, 0);
                today_exists_in_log = habit.completed_dates.some(
                  (date_in_log) => date_in_log.getTime() == today.getTime()
                );
                if (!today_exists_in_log) {
                  habit.completed_dates.push(today);
                }
                console.log(habit.completed);
                user.save();
                res.status(200).json(user.roles);
              }
            }
        });
    });
  }
  
module.exports = {
  addRole,
  index,
  deleteRole,
  addHabit,
  updateHabit,
  deleteHabit,
  addTask,
  deleteTask,
  completeHabit,
  calculateStreak
};
