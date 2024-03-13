import React from "react"
import './App.css';
import Example from "./Components/Example";

class App extends React.Component {
  styles={
    fontStyle:"bold",
    color:"red"
  }
  render(){
  return (
    <div className="App">
      <h1 style={this.styles}>Welcome</h1>
      <Example />
    </div>
  );
}
}

export default App;
