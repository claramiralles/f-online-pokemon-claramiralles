import './App.scss';
import React, {Component} from 'react';
import HomePage from '../HomePage/HomePage';
import DetailPage from '../DetailPage/DetailPage.js';
import {Route, Switch} from 'react-router-dom';
import fetchPokemon from '../../services/pokemon-service';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        pokemon: {
            data: [],
            isLoading: true
        },
        filter: {
            name: ''
        }
    } 
}

componentDidMount() {
  this.getPokemon();
}

getPokemon() {
  fetchPokemon()
  .then(data => {
    console.log (data);
    // const newData = data.map ((item, index) => {
    //   return {
    //     ...item,
    //     id: index + 1};
    //   })
      this.setState({
        pokemon: {
          data: data,
          isLoading: false
        } 
      })
      console.log(data);
    })
  }


  render (){
    return (
      <div>
        <main>
          <Switch>
            <Route 
              exact path = "/" 
              component = {HomePage}
            />
          </Switch>
        </main>
        App
        </div>
    )
  }
}

export default App;
