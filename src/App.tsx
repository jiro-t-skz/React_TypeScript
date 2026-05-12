import { useState } from "react";
import "./App.css";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

function App() {

const [pokemonId, setPokemonId] = useState('');
const [pokemonData, setPokemonData] = useState(null);

const handleFetchPokemon = async() =>{
const response = await fetch(API_URL + pokemonId)
const data = await response.json()
setPokemonData(data)
console.log('data', data);
}

return(
   <>
   <div>
      <h1>ポケモン図鑑</h1>
      <input type="text" value={pokemonId} onChange={(e) =>setPokemonId(e.target.value)}/>
      <button type='button' onClick={handleFetchPokemon}>検索</button>

      <div>
        <h2>{pokemonData?.name}</h2>
      </div>
   </div>
   </>
);
}

export default App;
