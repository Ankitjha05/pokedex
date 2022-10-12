import React,{useState,useEffect} from 'react'
import Pokemonview from './Pokemonview';

const Navbar = () => {

  const[pokemon, setpokemon]= useState();
  const[url,setUrl] = useState('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')

  const update=async()=>{
  let data = await fetch(url);
  let parsedata = await data.json();
  setpokemon(parsedata);
  console.log(parsedata);
  }
  const handleclick =(e)=>{
    if(e.target.name==='next'){
      setUrl(pokemon.next)
      update()
    }
    else{
      setUrl(pokemon.previous);
      update()
    }
  }
  useEffect(()=>{
    update();
    // eslint-disable-next-line
  },[])
  return (
    <div className='navbar'>
      Hi from Navbar
      <Pokemonview pokemon={pokemon} url={url}/>
      <button name='next' onClick={handleclick}>Next</button>
      <button name='prev' onClick={handleclick}>Prev</button>
    </div>
  )
}

export default Navbar
