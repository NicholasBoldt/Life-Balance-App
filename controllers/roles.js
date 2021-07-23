const User = require("../models/user");

async function addRole(req, res) {
  console.log(req.body);
  try {
    const user = await User.findById(req.user);
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
  const user = await User.findById(req.user);
  const roles = user.roles;
  res.status(200).json(roles);
}

async function deleteRole(req, res) {
  console.log(req.params.id);
  const user = await User.findById(req.user);
  user.roles = user.roles.filter((role) => role._id != req.params.id);
  await user.save();
  res.status(200).json(user.roles);
}

async function addHabit(req, res) {
  console.log(req.body);
  try {
    const user = await User.findById(req.user);
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
    const user = await User.findById(req.user);
    console.log("user: ", user);
    user.roles.forEach((role) => {
      role.habits.forEach((habit) => {
        if (habit._id == req.params.id) {
          console.log(habit._id);
          console.log(habit);
          (habit.name = req.body.name), (habit.amount = req.body.amount);
        } else {
          console.log("Habit not found");
        }
      });
    });
    if (req.body.newRole) {
      let tempHabit;
      user.roles.forEach(function (role) {
        const idx = role.habits.findIndex((habit) => {
          console.log("habitid:", habit._id);
          console.log("params:", req.params.id);
          return habit._id == req.params.id;
        });
        console.log(idx);
        if (idx != -1) {
          tempHabit = role.habits[idx];
          role.habits.splice(idx, 1);
        }
      });
      user.roles.forEach(function (role) {
        if (role.name == req.body.newRole) {
          role.push(tempHabit);
        }
      });
    }
    await user.save();
    res.status(200).json(user.roles);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteHabit(req, res) {
    const user = await User.findById(req.user);
  user.roles.forEach(function (role) {
    const idx = role.habits.findIndex((habit) => {
      console.log("habitid:", habit._id);
      console.log("params:", req.params.id);
      return habit._id == req.params.id;
    });
    console.log(idx);
    if (idx != -1) {
      role.habits.splice(idx, 1);
    }
  });
  await user.save();
  res.status(200).json(user.roles);
}

async function addTask(req, res) {
    console.log(req.body);
    try {
      const user = await User.findById(req.user);
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
    const user = await User.findById(req.user);
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
     const user = await User.findById(req.user);
     dates = [];
     user.roles.forEach((role) => {
       role.habits.forEach((habit) => {
         if (habit.id == req.params.id) {
           console.log("dates:", habit.completed_dates);
           dates = habit.completed_dates;
         }
       });
     });
     let current_date = new Date();
     current_date.setHours(0, 0, 0, 0);
     let streak = 0;
     for (let i = dates.length - 1; i >= 0; i--) {
       while (i >= 0 && dates[i].getTime() == current_date.getTime()) {
         streak++;
         i--;
         current_date.setDate(current_date.getDate() - 1);
       }
     }
     let yesterdayDate = new Date();
     yesterdayDate.setHours(0, 0, 0, 0);
     yesterdayDate.setDate(yesterdayDate.getDate() - 1);
     if (streak === 0) {
       for (let i = dates.length - 1; i >= 0; i--) {
         while (i >= 0 && dates[i].getTime() == yesterdayDate.getTime()) {
           streak++;
           i--;
           yesterdayDate.setDate(yesterdayDate.getDate() - 1);
         }
       }
     }
     console.log(streak);
     res.status(200).json(streak);
   }

  async function completeHabit(req, res) {
    const user = await User.findById(req.user);
    user.roles.forEach(function(role) {
        role.habits.forEach(function(habit) {
            if (habit.id === req.params.id) {
              if (habit.completed) {
                habit.completed = false;
                user.save();
                res.status(200).json(user.roles);
              } else {
                habit.completed = true;
                let today = new Date();
                today.setHours(0, 0, 0, 0);
                todayExists = habit.completed_dates.some(
                  (dateInLog) => dateInLog.getTime() == today.getTime()
                );
                if (!todayExists) {
                  habit.completed_dates.push(today);
                }
                user.save();
                res.status(200).json(user.roles);
              }
            }
        });
    });
  }

  async function resetHabits(req, res) {
    const user = await User.findById(req.user);
    user.roles.forEach(function (role) {
      role.habits.forEach(function (habit) {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        todayExists = habit.completed_dates.some(
          (dateInLog) => dateInLog.getTime() == today.getTime()
        );
        if (!todayExists) {
          habit.completed = false;
        }
      });
    });
    user.save();
    res.status(200).json(user.roles);
  }

  async function moveUpHabit(req, res) {
    const user = await User.findById(req.user);
    user.roles.forEach(function(role) {
        let tempHabit = {};
        const idx = role.habits.findIndex((habit) => {
          if(habit._id == req.params.id) {
            tempHabit = habit;
            return habit._id;
          }
        });
        if(idx !== -1) {
            role.habits.splice(idx, 1);
            // role.habits.unshift(tempHabit)
            if(idx == 0) {
                role.habits.push(tempHabit);
            } else {
                role.habits.splice(idx-1, 0, tempHabit);
            }
        }
    });
    await user.save();
    res.status(200).json(user.roles);
  }


     
module.exports = {
  addRole,
  index,
  deleteRole,
  addHabit,
  updateHabit,
  deleteHabit,
  moveUpHabit,
  resetHabits,
  addTask,
  deleteTask,
  completeHabit,
  calculateStreak
};
