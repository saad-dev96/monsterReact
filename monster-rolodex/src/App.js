import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component'
import { SearchBox } from './component/search-box/search-box.component'
class App extends Component 
{
  constructor()
  {
    super();
    this.state= { monsters : [], searchField: [] };
  }
  componentDidMount() { //lifeCycle methods
 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=> this.setState({monsters:users}))
  }
 
  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField)
      );
    return (
      <div className="App">
        <SearchBox placeHolder='Search Monsters' handleChange= {e=>{this.setState({searchField: e.target.value})}}/>
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
