import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from 'react-router-dom';

import Pokemons from './components/pokemon/pokemons';
import PokemonDetails from './components/pokemon/pokemon_detail';
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <PrimarySearchAppBar/>
        <Switch>
          <Route path="/:name" component={PokemonDetails}/>
          
          <Route path="/" component={Pokemons}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
