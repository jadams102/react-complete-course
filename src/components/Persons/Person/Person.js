import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] render')
        return (
            <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
    }
 
};

export default person;