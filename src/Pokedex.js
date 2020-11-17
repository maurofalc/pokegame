import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">WINNER</h1>
    } else {
      title = <h1 className="Pokedex-loser">LOSER</h1>
    }
    return(
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemons.map(pokemon => (
            <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} xp={pokemon.base_experience}/>
          ))}
        </div>
      </div>
    );
  }
};

export default Pokedex;