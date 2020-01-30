import React, { Component } from 'react';
import Axios from 'axios';

import { API_URL } from '../../commons/constants';
import Pokemon from './pokemon';

class Pokemons extends Component {
    state = {
        pokemons: []
    }

    async componentDidMount(){
        const response = await Axios.get(`${API_URL}?limit=151`);
        const pokemons = response.data.results;
        this.setState({
            pokemons
        })
    }

    handleOpenDetails = (pokemon) => {
        this.props.history.push(pokemon.name);
    }

    render(){
        return (
            <div id="pokemon-container">
                {this.state.pokemons.map(pokemon => (
                    <Pokemon 
                    key={pokemon.name}
                    pokemon={pokemon} />
                    // onClick={() => thixs.handleOpenDetails(pokemon)}/>
                ))}
            </div>
        )
    }
}

export default Pokemons;