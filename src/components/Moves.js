import React, {useState, useEffect} from 'react';

function Moves({match}) {
    useEffect(() => {
        fetchMoves();
        
     },[]);
     const [mov,setMov] = useState({
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
        move: {}

    });
    const fetchMoves = async() => {
        const fetchM = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);

        const mov = await fetchM.json();
        setMov(mov);
        
        }
    return (
        <div className="moves">
             <h2 className="moveshead">MOVES</h2>
             <p className="movesp" >
            {mov.moves.map((moveObject) => 
        moveObject.move.name).join(', ')}
            </p>
        </div>
    )
}

export default Moves
