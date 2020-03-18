import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 'abcd1',name: 'Hulk',age: 28},
      {id: 'abcd2',name: 'Strange',age: 30},
      {id: 'abcd3',name: 'ironman',age: 50}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'black'
      }
    }
    let persons = null;
    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            />
          })}
        </div>
      );
    }

    let classes = [];

    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('bold');
    }

    return (
     
      <div className="App">
      <h1> Hi, i AM A REACT APP</h1>
      <h1 className={classes.join(' ')}> this is working</h1>
      <button 
      style={style}
        onClick={this.togglePersonsHandler}>toggle persons</button>
      {persons}
      </div>
      
    );
  }
}

export default App;
