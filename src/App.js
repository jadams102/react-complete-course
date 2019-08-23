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

  switchNameHandler = (newName) => {
    // DONT DO THIS this.state.persons[0].name = "Joeliosis";
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Morriganism', age: 21 },
        { name: 'Jackie Boi', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>THIS IS REALLY WORKING</p>
        <button onClick={this.switchNameHandler.bind(this, 'Joeliosism')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Joeliosism!')}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My Hobbies include being rad as fuck</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It work?'));
  }
}

export default App;
