import React, {Component} from "react";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: "",
    };
  }

  handleChange(val){
    this.setState({ input: val });
  }

  render(){
    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}/>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
