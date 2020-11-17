import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  };

  render() {
    const hand1 = [];
    const hand2 = [ ...this.props.pokemons ];

    while (hand1.length < hand2.length) {
      const rndIdx = Math.floor(Math.random() * hand2.length);
      const rndPokemons = hand2.splice(rndIdx, 1)[0];
      hand1.push(rndPokemons); 
    }

    const total1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    const total2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return(
      <div>
        <Pokedex pokemons={hand1} exp={total1} isWinner={total1 > total2}/>
        <Pokedex pokemons={hand2} exp={total2} isWinner={total1 < total2}/>
      </div>
    );
  }
}

export default Pokegame;