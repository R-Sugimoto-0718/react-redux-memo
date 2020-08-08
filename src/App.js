import React, { Component } from 'react';
import './App.css';
import Radium  from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adfeqf', name: 'Max', age: 28 },
      { id: 'gerrr3', name: 'Manu', age: 29 },
      { id: 'jkni123', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    // ...スプレッドオペレーターを使う
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonhandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonhandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold ')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);

// import React, { Component } from 'react';
// import './App.css';
// import Validation from './Validation/Validation';
// import Char from './Char/Char';

// class App extends Component {
//   state = {
//     userInput: ''
//   }

//   inputChangedHandler = (event) => {
//     this.setState({ userInput: event.target.value })
//   }

//   deletChartHandler = (index) => {
//     const text = this.state.userInput.split('')
//     text.splice(index, 1)
//     const updatedText = text.join('');
//     this.setState({ userInput: updatedText })
//   }



//   render() {
//     const charList = this.state.userInput.split('').map((ch, index) => {
//       return <Char character={ch} key={index}
//         clicked={() => this.deletChartHandler(index)} />
//     })


//     return (
//       <div className="App">
//         <ol>
//           <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
//           <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
//           <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
//           <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
//           <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
//           <li>When you click a CharComponent, it should be removed from the entered text.</li>
//         </ol>
//         <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
//         <hr />
//         <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
//         <p>{this.state.userInput}</p>
//         <Validation inputLength={this.state.userInput.length} />
//         {charList}
//       </div>
//     );
//   }
// }

// export default App;
