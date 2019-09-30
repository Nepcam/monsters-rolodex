import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <input type='search' placeholder='search monster'
        onChange={e => this.setState({ searchField: e.target.value })
        }
        />
        <CardList monsters={this.state.monsters} /> 
      </div>
    );
  }
}

// The componentDidMount function makes an API call using fetch .then response represents a response to that fetch .then the users(state) is changed using the setState() method passing in monsters with the property of users 

// in line 23 we passed in an attribute to the CardList component state monsters={this.state.monsters} from up line 9. The CardList component recieves it as a prop

export default App;

