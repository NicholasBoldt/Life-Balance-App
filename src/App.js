import './App.css';
import React from 'react'
import Role from './components/Role/Role';
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import RolesPage from './pages/RolesPage/RolesPage';
import TasksPage from './pages/TasksPage/TasksPage';


let running = {
  name: 'Running',
  amount: '30 minutes',
  completed: true
}

let reading = {
  name: 'Reading',
  amount: '10 Pages',
  completed: false
}

let habits = [running, reading]



class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        <header className='header-footer'>LIFE BALANCE APP</header>
        <Switch>
          <Route exact path='/' render={() =>
            <RolesPage name='life' habits={habits} />
          } />
          <Route exact path='/habits' render={() => 
            <HabitsPage />
          } />
          <Route exact path='/tasks' render={() => 
            <TasksPage />
          } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
