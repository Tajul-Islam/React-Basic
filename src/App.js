import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state={
    person : [
      {id:"ab", name:'Mo Salah', age:26},
      {id:"cd", name:'Mane', age:27},
      {id:"ef", name:'Firmino', age:28}
    ],
    other:'something',
    showPerson: true
  };
  togglePersonHandler = () =>{
    this.setState({showPerson:!this.state.showPerson})
  };
  deletePersonHandler = (personIndex) =>{
      const findIndex = this.state.person.findIndex(p=>{
          return p.id === personIndex;
      });
      const Persons =[...this.state.person];
      Persons.splice(findIndex,1);
      this.setState({person:Persons});
  };
  changeNameHandler = (event, personIndex) =>{
      const findIndex = this.state.person.findIndex(p=>{
          return p.id === personIndex;
      });
      const singlePerson = {...this.state.person[findIndex]};
      singlePerson.name = event.target.value;
      const Persons =[...this.state.person];
      Persons[findIndex] = singlePerson;
      this.setState({person:Persons});
  };
  render() {
      let persons = null;
      if(this.state.showPerson){
          persons = this.state.person.map((person)=>{
             return <Person
                 name={person.name}
                 age={person.age}
                 key ={person.id}
                 click ={()=>this.deletePersonHandler(person.id)}
                 change ={(event)=>this.changeNameHandler(event, person.id)}
             />
          });
      }
    return (
        <div className="App">
          <h1>First React App</h1>
          <button onClick={this.togglePersonHandler} className="btn btn-primary">Show / Hide Person Details</button>
            <hr></hr>
            {persons}
        </div>
    );
  }
}

export default App;
