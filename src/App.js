import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>THIS IS REALLY WORKING</p>
        <Person name="Joel" age="30" />
        <Person name="Morrigan" age="21"/>
        <Person name="Jack" age="27">My Hobbies include being rad as fuck</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It work?'));
  }
}

export default App;
