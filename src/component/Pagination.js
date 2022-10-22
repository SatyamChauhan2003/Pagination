import React from 'react';


 const Pagination = ({postsPerPage, totalposts, paginate}) => {
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalposts/postsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <div>
    <ul className='pagination'>
       {pageNumbers.map((number)=>{
        return(
            <>
            <li key={number.id} className="page-item">
            <a onClick={()=> paginate(number)} href="#" className='page-link'>
            {number}
            </a>
            </li>
            </>
        )
       })} 
    </ul>
    </div>
  )
}
export default Pagination;