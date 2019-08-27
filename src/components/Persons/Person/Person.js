import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary'
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] render')
        return (
            <React.Fragment>
                <p key="1l" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="2l">{this.props.children}</p>
                <input key="3l" type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        )
    }
};

export default Person;