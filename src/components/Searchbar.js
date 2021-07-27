import React,{useState} from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbar.css';

function Searchbar({onSearch}) {
    const [search, setSearch] = useState("");
    
    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value);
      }
    return (
      <div>
      <div className="searchform">
        <FaSearch className="svg"/>
        <input type="text" className="searchinput" style={{width: "240px"}}  value={search}
            onChange={(e)=> onInputChange(e.target.value)}/>
       </div>
     </div>
    )
}

export default Searchbar
