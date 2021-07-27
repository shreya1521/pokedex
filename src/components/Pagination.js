import React from 'react';
import './pagestyle.css';

const Pagination = ({postsPerPage, totalPosts, paginate, currentpage}) => {
    const pagenumbers=[];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pagenumbers.push(i);
    }
    return (
        <nav className="pnav">
            <ul className="pagination">
                {pagenumbers.map(number =>(
                    <li key={number} className={currentpage==number?"active":null} onClick={()=>paginate(number)}href ="!#">
                            {number}
                       
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination
