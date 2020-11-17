import React, { Component } from 'react';
import './Pokecard.css';

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(this.props.id)}.png`;
    return(
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={img} alt={this.props.name}/>
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.xp}</div>
      </div>
    );
  }
}

export default Pokecard;
