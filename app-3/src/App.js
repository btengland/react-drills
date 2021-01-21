import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      filteredFood: "",
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleChange(filter){
    this.setState({filteredFood: filter})
  }

  render(){
    let foodDisplay = this.state.food.filter((element, index) => {
      return element.includes(this.state.filteredFood);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}/>
        {foodDisplay}
      </div>
    );
  }
}

export default App;