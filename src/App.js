import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        person : [
            {name: "Max", age : 28},
            {name: "Bill", age : 29},
            {name: "Jane", age : 30}
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

    nameChangeHandler = (event) => {
        this.setState({
            person : [
                {name: "Leon" , age : 28},
                {name: event.target.value, age : 29},
                {name: "Jill", age : 30}
            ]
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
                 {this.state.person.map(p => {
                    return <Person name={p.name} age={p.age} />
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
