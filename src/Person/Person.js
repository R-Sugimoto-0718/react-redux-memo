import React from 'react';

const person = (props) => {
  console.log(props.children, 'aaaaa')
  return (
    <div>
      <h1>Hello {props.name} and I am {props.age}years old</h1>
      <p>{props.children}</p>
    </div>
  )
}

export default person;