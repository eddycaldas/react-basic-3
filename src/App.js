import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Erica", age: 30 }
      ],
      otherState: "some other state",
      showPersons: false
    }

    switchNameHandler = (newName) => {
      this.setState( {
        persons: [
          { name: newName, age: 28 },
          { name: "Manu", age: 29 },
          { name: "Erica", age: 31 }
        ]
      } )
    }

    namechangedHandler = (event) => {
      this.setState( {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: "Erica", age: 31 }
        ]
      } )
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState( { showPersons: !doesShow } )
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

    if ( this.state.showPersons ) {
      persons = (
          <div>
            { this.state.persons.map(person => {
              return <Person 
                name={ person.name } 
                age={ person.age }/>
            }) }
          </div>
      )
    }

    return (
      <div className="App">
        <h1>This is react app</h1>
        <p>This is really working!@!!!!</p>
        <button 
          style={ style }
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons } 
      </div>
    );
  }
}

export default App;
