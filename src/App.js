import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll'
import './App.css'
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({Robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { Robots, searchfield } = this.state;

    const filteredRobots = Robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !Robots.length ?
      <h1>Loading</h1> :
         (
        <div className='tc'> 
            <h1 className='f1'>RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList Robots={filteredRobots} />
            </Scroll>
        </div>
        );
    }
  }

export default App;

