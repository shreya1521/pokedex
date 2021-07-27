import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Searchbar.css';

// function Pokemoncard({match , item}) {
 
  
//   useEffect(() => {
//     fetchIte();
    
//  },[]);

//   const [ite,setIte] = useState({
  
//     name: '',
//     held_items: [],
//     id: ''
// });

// const fetchIte = async() => {
//   const fetchIt = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);

//   const ite = await fetchIt.json();
//   setIte(ite);
//   console.log(ite);
//   }

// return (
  
//   <div className="card">
//     <div className="cardimg">
//    <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} className="img"/>
//    </div>
//     <div >
//       <h3 className = "h3">
//     <Link to= {`/pokemondata/${item.name}`} className="itemname">
//                   {item.name.toUpperCase()}
//     </Link>
//     </h3>
//     </div>
//   </div>
 
// )}
// export default Pokemoncard




// function Pokemoncard({item}) {
 

//   const [img] = useState({
  
//     name: {
//       intro: 'bulbasaur',
//       id: 1
//     },
//     name: {
//       intro: 'ivysaur',
//       id: 2
//     },
//     name: {
//       intro: 'venusaur',
//       id: 3
//     },
//     name: {
//       intro: 'charmander',
//       id: 4
//     },
//     name: {
//       intro: 'charmeleon',
//       id: 5
//     },
//     name: {
//       intro: 'charizard',
//       id: 6
//     },
//     name: {
//       intro: 'squirtle',
//       id: 7
//     },
//     name: {
//       intro: 'wartortle',
//       id: 8
//     },
//     name: {
//       intro: 'blastoise',
//       id: 9
//     },
//     name: {
//       intro: 'caterpie',
//       id: 10
//     },
//     name: {
//       intro: 'metapod',
//       id: 11
//     },
//     name: {
//       intro: 'butterfree',
//       id: 12
//     },
//     name: {
//       intro: 'weedle',
//       id: 13
//     },
//     name: {
//       intro: 'kakuna',
//       id: 14
//     },
//     name: {
//       intro: 'beedrill',
//       id: 15
//     },
//     name: {
//       intro: 'pidgey',
//       id: 16
//     },
//     name: {
//       intro: 'pidgeotto',
//       id: 17
//     },
//     name: {
//       intro: 'pidgeot',
//       id: 18
//     },
//     name: {
//       intro: 'rattata',
//       id: 19
//     },
//     name: {
//       intro: 'raticate',
//       id: 20
//     }


// });

// const func = () => {
//   if (img.name.intro == item.name)
//   return img.name.id;
   
// }


// return (
  
//   <div className="card">
//     <div className="cardimg">
//    <img src = {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+func()+'.svg'} className="img"/>
//    </div>
//     <div >
//       <h3 className = "h3">
//     <Link to= {`/pokemondata/${item.name}`} className="itemname">
//                   {item.name.toUpperCase()}
//     </Link>
//     </h3>
//     </div>
//   </div>
 
// )}
// export default Pokemoncard





function Pokemoncard({item}) {
 

  const func = (imgname) => {
  
    if (imgname=='bulbasaur'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';
     
    }
     else if (imgname=='ivysaur'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg';
     
    }
    else if (imgname=='venusaur'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg';
     
    }
    else if (imgname=='charmander'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg';
     
    }
    else if (imgname=='charmeleon'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg';
     
    }
    else if (imgname=='charizard'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg';
     
    }
    else if (imgname=='squirtle'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg';
     
    }
    else if (imgname=='wartortle'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg';
     
    }
    else if (imgname=='blastoise'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg';
     
    }
    else if (imgname=='caterpie'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg';
     
    }
    else if (imgname=='metapod'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg';
     
    }
    else if (imgname=='butterfree'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg';
     
    }
    else if (imgname=='weedle'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg';
     
    }
    else if (imgname=='kakuna'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg';
     
    }
    else if (imgname=='beedrill'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg';
     
    }
    else if (imgname=='pidgey'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg';
     
    }
    else if (imgname=='pidgeotto'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg';
     
    }
    else if (imgname=='pidgeot'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg';
     
    }
    else if (imgname=='rattata'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg';
     
    }
    else if (imgname=='raticate'){
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg';
     
    }
    else 
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg';
     
  }


return (
  
  <div className="card">
    <div className="cardimg">
   <img src = {func(item.name)} className="img"/>
   </div>
    <div >
      <h3 className = "h3">
    <Link to= {`/pokemondata/${item.name}`} className="itemname">
                  {item.name.toUpperCase()}
    </Link>
    </h3>
    </div>
  </div>
 
  )}
export default Pokemoncard
