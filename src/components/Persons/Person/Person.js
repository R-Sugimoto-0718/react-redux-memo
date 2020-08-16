import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('person js rendering')
    return (
      <Aux>
        <p key="key1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="key2">{this.props.children}</p>
        <input key="key3" type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    )
  }
};

export default Person