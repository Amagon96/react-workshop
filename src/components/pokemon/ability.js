import React from 'react';

const ability = (props) => {
    const name = props.ability.ability.name;
    
    return(
        <div className="ability-card">
            <span className="pokemon-name">
                {name}
            </span>
        </div>
    )
}

export default ability;