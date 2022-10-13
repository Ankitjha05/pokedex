import React from 'react'

export default function Pokemoninfo(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt="" />
    </div>
  )
}
