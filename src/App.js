import logo from './logo.svg';
import './App.css';
import React from 'react'
import Role from './components/Role/Role';
import { render } from 'react-dom';


let running = {
  name: 'Running',
  amount: '30 minutes',
  completed: true
}

let habits = [running]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  

  render() {
    return (
      <div className="App">
       <Role name="Life" habits={habits} />
      </div>
    );
  }
  
}

export default App;
