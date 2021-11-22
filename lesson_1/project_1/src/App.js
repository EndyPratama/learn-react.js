import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Kamu'};
  }
  
  // Nyatakan method handleClick 
  handleClick(name){
    this.setState({name : name});
  }
  
  render() {
    // let element = <h1>I Love JSX!</h1>;
    // return element;
    return (
    	<div>
        <h1>Hello, {this.state.name}!</h1>
        <button onClick={() => {this.handleClick('Kamu')}}>Kamu</button>
        <button onClick={() => {this.handleClick('Dia')}}>Dia</button>
      </div>
    );
  }
}

export default App;

