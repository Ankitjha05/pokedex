import React from 'react'
import Pokemoninfo from './Pokemoninfo';

export default function Pokemonview(props) {
    
    // const URL = `${props.url}`
  return (
    <div className='pokepage'>
      {props.pokemon.map((ele,ind)=>{
        return <Pokemoninfo image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${ind+1}.svg`} name={ele.name}/>
      })}
    </div>
  )
}
