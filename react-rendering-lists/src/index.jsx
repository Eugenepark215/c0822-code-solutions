import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}
function PokemonReturn(props) {
  const pokemonNames = pokedex.map(pokemon =>
  <ListItem key={pokemon.number} value={pokemon.name} />
  );
  return (
    <ul>
      {pokemonNames}
    </ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<PokemonReturn />);
