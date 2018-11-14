import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        person : [
            {id : 1, name: "Max", age : 28},
            {id : 2, name: "Bill", age : 29},
            {id : 3, name: "Jane", age : 30}
        ],
        otherState : "some other value",
        showPersons: false
    };

    switchNameHandler = (newName) => {
        //console.log("button was click");
        this.setState({
            person : [
                {name: newName , age : 28},
                {name: "Chris", age : 29},
                {name: "Jill", age : 30}
            ]
        });

    };

    deletePersonHandler = (personIndex) => {
        const personChange = [...this.state.person];
        personChange.splice(personIndex, 1);
        this.setState({person : personChange});
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const persons = {
            ...this.state.persons[personIndex]
        };

        persons.name = event.target.value;

        const person = [...this.state.persons];

        persons[personIndex] = person;

        //const person = Object.assign({}, this.state.person[personIndex]);


        this.setState({
            persons : persons
        });
    };

    toggelPersonHander = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow});
    };

  render() {
     const style = {
         backgroundColor : 'white',
         font : 'inherit',
         border : '1px solid blue',
         padding : '8px',
         cursor : 'pointer'
     };

     let person = null;
     if (this.state.showPersons) {
         person = (
             <div>
                 {this.state.person.map((p, index) => {
                    return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={p.name}
                        age={p.age}
                        key={p.id}
                        change={(event) => this.nameChangeHandler(event, p.id)}
                    />
                 })}
             </div>
         );
     }

    return (
      <div className="App">
        <h1>Hello world with react app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.toggelPersonHander}>Switch Person</button>
          {person}
      </div>
    );

    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
