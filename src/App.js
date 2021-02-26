import './App.css';
import React from 'react'
import Role from './components/Role/Role';
import NavBar from './components/NavBar/NavBar';
import { Redirect } from 'react-router-dom';
import { Route, Switch, withRouter } from 'react-router-dom';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import RolesPage from './pages/RolesPage/RolesPage';
import TasksPage from './pages/TasksPage/TasksPage';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignupPage from './pages/SignupPage/SignupPage';
import RoleDetailPage from './pages/RoleDetailPage/RoleDetailPage';
import userService from './utils/userService';
import rolesService from './utils/rolesService';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      roles: []
    }
  }

  

  

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

   handleAddRole = async () => {
    const roles = await rolesService.getAll();
    this.setState({roles: roles})
  }

  handleDeleteRole = async id => {
    const roles =  await rolesService.deleteRole(id);
    this.setState({roles: roles});
    this.props.history.push('/');
    // this.setState(state => ({
    //   roles: state.roles.filter(role => role._id !== id)
    // }));

  }

  handleAddHabit = async () => {
    const roles = await rolesService.getAll();
    this.setState({roles: roles})
  }


  handleDeleteTask = async (id) => {
    console.log("handledeletetask trigger")
    const roles = await rolesService.deleteTask(id);
    this.setState({roles: roles});
    // this.setState(state => ({
    //   roles: state.roles.filter(role => role._id !== id)
    // }));
  }

  handleAddTask = async () => {
    const roles = await rolesService.getAll();
    this.setState({roles: roles})
  }

  handleCompleteHabit = async (id) => {
    const roles = await rolesService.completeHabit(id);
    this.setState({roles: roles})
  }

  handleGetStreak = async (id) => {
    const streak = await rolesService.calculateStreak(id);
    console.log(streak);
  }


  // Life Cycle

  async componentDidMount() {
    const roles = await rolesService.getAll();
    this.setState({roles: roles});
  }





  render() {
    return (
      <div className="App">
        <header className="header-footer">LIFE BALANCE APP</header>

        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <RolesPage
                history={history}
                user={this.state.user}
                roles={this.state.roles || []}
                handleAddRole={this.handleAddRole}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route exact path="/habits"
            render={() => (
              <HabitsPage
                roles={this.state.roles}
                handleCompleteHabit={this.handleCompleteHabit}
              />
            )}
          />
          <Route
            exact
            path="/details"
            render={({ location }) => (
              <RoleDetailPage
                roles={this.state.roles}
                location={location}
                handleDeleteRole={this.handleDeleteRole}
                handleAddHabit={this.handleAddHabit}
                handleAddTask={this.handleAddTask}
                handleDeleteTask={this.handleDeleteTask}
                handleCompleteHabit={this.handleCompleteHabit}
                handleGetStreak={this.handleGetStreak}
              />
            )}
          />
          <Route exact path="/tasks" render={(props) => <TasksPage />} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
