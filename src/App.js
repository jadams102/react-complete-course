import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Joel', age: 30 },
      { name: 'Morrigan', age: 21 },
      { name: 'Jack', age: 27 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>THIS IS REALLY WORKING</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age="30" />
        <Person name="Morrigan" age="21"/>
        <Person name="Jack" age="27">My Hobbies include being rad as fuck</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It work?'));
  }
}

export default App;
