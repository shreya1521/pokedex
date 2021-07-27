import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Searchbar.css';

function Pokemondata({match}) {
   
    useEffect(() => {
       fetchItem();
       
    },[]);
    const [item,setItem] = useState({
        abilities: [],
        forms: [],
        ability: {},
        name: '',
        game_indices: [],
        height: '',
        species: {},
        weight: '',
        stats: [],
        stat: {},
        types: [],
        type: {},
        moves: [],
        move: {},
        sprites: {},
        front_default: "",
        held_items: [],
        id: ''
    });

    
    const fetchItem = async() => {
        const fetchI = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);

        const item = await fetchI.json();
        setItem(item);
        }
        function calculateColor(prop) {

            if (prop == 'grass')
            return 'lightgreen';
            else if(prop =='water')
            return 'lightblue';
            else if(prop == 'fire')
            return 'orange';
            else if(prop == 'normal')
            return '#ffe8d6';
            else if(prop == 'electric')
            return 'yellow';
            else if(prop == 'ice')
            return '#caf0f8';
            else if(prop == 'fighting')
            return 'orange';
            else if(prop == 'poison')
            return '#b5179e';
            else if(prop == 'ground')
            return '#e9d8a6';
            else if(prop == 'flying')
            return '#a2d2ff';
            else if(prop == 'psychic')
            return 'pink';
            else if(prop == 'bug')
            return '#40916c';
            else if(prop == 'rock')
            return '#e07a5f';
            else if(prop == 'ghost')
            return '#feeafa';
            else if(prop == 'dark')
            return 'grey';
            else if(prop == 'dragon')
            return '#3a86ff';
            else if(prop == 'steel')
            return '#d3d3d3';
            else
            return 'lightpink';
          }
          
        //   console.log('hiiiiiiiiii', item.types[0].type.name);
          if(item.types.length!==0)
          { var prop=item.types[0].type.name;}
          
          const backgroundColor = calculateColor(prop);
    return (
        <div style = {{ backgroundColor: backgroundColor }} className="pokedata">
            <h1>POKEMON DATA</h1>
            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} />
            <h2>Abilities:
            <span>    {item.abilities.map((abilityObject) => 
        abilityObject.ability.name).join(', ')}
            </span>
            </h2>
            <h2>Forms:<span>    {item.forms.map((object)=>object.name)}
            </span></h2>
            <h2>Height:<span>    {item.height}
            </span></h2>
            <h2>Name:<span>    {item.name}</span>
            
            </h2>
            <h2>Species:<span>    {item.species.name}</span>
           
            </h2>
            <h2>Weight:<span>    {item.weight}</span>
           
            </h2>
            <h2>Stats:<span>    {item.stats.map((statObject) => 
        statObject.stat.name).join(', ')}</span>
           
            </h2>
            <h2>Types:<span>    {item.types.map((typeObject) => 
        typeObject.type.name).join(', ') }</span>
          
        
            </h2>
            <h2>
            <Link to = {`/moves/${item.name}`}>MOVES(click here for more info)</Link>
            </h2>
        </div>
    )
}

export default Pokemondata
