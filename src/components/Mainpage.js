import React,{useState, useEffect, useMemo} from 'react';
import Pagination from './Pagination';
import './Searchbar.css';
import Pokemoncard from './Pokemoncard';
import Searchbar from './Searchbar';


function Mainpage({match}) {
    useEffect(() => {
        fetchItems();
      
    },[]);
    
    const [items,setItems] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [postsPerPage] = useState(5);
    const [search, setSearch] = useState("");

    

  
    const fetchItems = async() => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/');

        const items = await data.json();
      
        setItems(items.results);
        }

      

        const indexOfLastPost = currentpage*postsPerPage ;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentposts = items.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pagenumber) => setCurrentpage(pagenumber);

    const cdata =useMemo(() => {
        let comp = items;
        if(search){
            comp=comp.filter(
                item=>item.name.toLowerCase().includes(search.toLowerCase())
            )
        }
       
        return comp.slice(indexOfFirstPost, indexOfLastPost);
    },[items, currentposts, search])
    
   
    return (
      <div className="root">
          
          <Searchbar onSearch={(value)=>{
              setSearch(value);
              setCurrentpage(1);
          }}/>
            {cdata.map(item => (
                
                <Pokemoncard key={item.name} match= {match} item={item} />
                  
            )) }
    
            <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} currentpage={currentpage}/>
       
        </div>
    )
}

export default Mainpage
