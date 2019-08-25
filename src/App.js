import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Joel', age: 30 },
      { name: 'Morrigan', age: 21 },
      { name: 'Jack', age: 27 }
    ],
    showpersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 30 },
        { name: 'Morrigan', age: 21 },
        { name: 'Jack', age: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showpersons;
    this.setState({ showpersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showpersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              click={this.deletePersonHandler}
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>THIS IS REALLY WORKING</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It work?'));
  }
}

export default App;
