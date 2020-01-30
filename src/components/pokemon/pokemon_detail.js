import React from 'react';
import Axios from 'axios';

import Ability from './ability';
import { API_URL } from '../../commons/constants';

class PokemonDetails extends React.Component {
    

    state = {
        name: '',
        types: [],
        sprite: '',
        abilities: []
    };

    async componentDidMount(){
        const response = await Axios.get(`${API_URL}${this.props.match.url}`);
        const pokemon = response.data;
        
        this.setState({
            name: pokemon.name,
            types: pokemon.types,
            abilities: pokemon.abilities,
            spriteURL: pokemon.sprites.front_default
        });
    }
    
    render(){
        return(
            <div className="pokemon-card">
                <span className="pokemon-name">{this.state.name}</span>
                <div>
                    <img src={`${this.state.spriteURL}`} alt="This is a pokemon"/>
                </div>
                <span> Abilities: {this.state.abilities.map(ability => (
                    <div key={ability.slot}>{ability.ability.name}</div>
                ))} </span>
                
            </div>
        )
    }
}

export default PokemonDetails;