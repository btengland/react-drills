import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component{
  constructor(){
    super();

    this.state = {
      list: [],
      input: ""
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(val){
    this.setState({input: val});
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render(){
    console.log(this.state)
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/>;
    });

    return(
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input value={this.state.input} onChange={e => this.handleInputChange(e.target.value)} type="text" placeholder="Enter new task"/>
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br/>
        {list}
        
      </div>
    )
  }

}

export default App;