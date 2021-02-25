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
    const roles =  rolesService.deleteRole(id);
    this.setState({roles: roles});
    // this.setState(state => ({
    //   roles: state.roles.filter(role => role._id !== id)
    // }));

  }

  // Life Cycle

  async componentDidMount() {
    const roles = await rolesService.getAll();
    this.setState({roles: roles});
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if(this.state.roles.length !== prevState.roles.length) {
  //     const roles = await rolesService.getAll();
  //     this.setState({roles: roles});
  //   }
  // }


  render() {
    return (
      <div className="App">
        <header className='header-footer'>LIFE BALANCE APP</header>
   
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path='/' render={() =>
            <RolesPage user={this.state.user} roles={this.state.roles} handleAddRole={this.handleAddRole} />
          } />
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history} handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/habits' render={props => 
            <HabitsPage />
          } />
          <Route exact path='/details' render={({location}) => 
            <RoleDetailPage location={location} handleDeleteRole={this.handleDeleteRole}/>
          } />
          <Route exact path='/tasks' render={(props) => 
            <TasksPage />
          } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
