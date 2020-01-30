import React from 'react';
import {Link} from 'react-router-dom'
import { SPRITE_URL } from '../../commons/constants';

const pokemon = (props) => {
    const name = props.pokemon.name;
    
    return (
        <Link
            className="pokemon-card"
            to={{
                pathname: `/${name}`,
                state: props.pokemon
            }}>
            <div>
                <span className="pokemon-name">
                    {name}
                </span>
                <div>
                    <img src={`${SPRITE_URL}${name}.png`} alt="This is a pokemon"/>
                </div>
            </div>
        </Link>
    )
}

export default pokemon;