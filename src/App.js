import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import RolesPage from "./pages/RolesPage/RolesPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import RoleDetailPage from "./pages/RoleDetailPage/RoleDetailPage";
import HabitDetailPage from "./pages/HabitDetailPage/HabitDetailPage";
import userService from "./utils/userService";
import rolesService from "./utils/rolesService";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

  const handleSignupOrLogin = async () => {
    const newUser = await userService.getUser();
    setUser(newUser);
    console.log("new user test", newUser);
    if (newUser) {
      await rolesService.resetHabits();
      await handleAddRole();
    }
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleAddRole = async () => {
    const userRoles = await rolesService.getAll();
    setRoles(userRoles);
  };

  const handleDeleteRole = async (id) => {
    const userRoles = await rolesService.deleteRole(id);
    setRoles(userRoles);
    props.history.push("/");
  };

  const handleAddHabit = async () => {
    const userRoles = await rolesService.getAll();
    setRoles(userRoles);
  };

  const handleUpdateHabit = async () => {
    const userRoles = await rolesService.getAll();
    setRoles(userRoles);
  };

  const handleDeleteHabit = async (id) => {
    const userRoles = await rolesService.deleteHabit(id);
    setRoles(userRoles);
    props.history.push("/");
  };

  const handleDeleteTask = async (id) => {
    const userRoles = await rolesService.deleteTask(id);
    setRoles(userRoles);
  };

  const handleAddTask = async () => {
    const userRoles = await rolesService.getAll();
    setRoles(userRoles);
  };

  const handleCompleteHabit = async (id) => {
    const userRoles = await rolesService.completeHabit(id);
    setRoles(userRoles);
  };

  const handleGetStreak = async (id) => {
    const streak = await rolesService.calculateStreak(id);
    return streak;
  };

  const handleMoveUpHabit = async (id) => {
    const userRoles = await rolesService.moveUpHabit(id);
    setRoles(userRoles);
  };

  useEffect(() => {
    handleSignupOrLogin();
  }, []);

  return (
    <div className="App">
      <header className="header-footer">LIFE BALANCE APP</header>
      <NavBar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <RolesPage
              history={history}
              user={user}
              roles={roles || []}
              handleAddRole={handleAddRole}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/habits"
          render={() => (
            <HabitsPage
              roles={roles}
              handleCompleteHabit={handleCompleteHabit}
              handleGetStreak={handleGetStreak}
              handleMoveUpHabit={handleMoveUpHabit}
            />
          )}
        />
        <Route
          exact
          path="/details"
          render={({ location }) => (
            <RoleDetailPage
              roles={roles}
              location={location}
              handleDeleteRole={handleDeleteRole}
              handleAddHabit={handleAddHabit}
              handleAddTask={handleAddTask}
              handleDeleteTask={handleDeleteTask}
              handleCompleteHabit={handleCompleteHabit}
              handleGetStreak={handleGetStreak}
              history={props.history}
              handleMoveUpHabit={handleMoveUpHabit}
            />
          )}
        />
        <Route
          exact
          path="/habit-details"
          render={({ location }) => (
            <HabitDetailPage
              roles={roles}
              location={location}
              handleUpdateHabit={handleUpdateHabit}
              handleDeleteHabit={handleDeleteHabit}
            />
          )}
        />
        <Route
          exact
          path="/tasks"
          render={() => (
            <TasksPage
              roles={roles}
              handleDeleteTask={handleDeleteTask}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
