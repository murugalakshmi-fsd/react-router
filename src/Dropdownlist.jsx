import React from 'react'

function Dropdownlist ({newdropdownlist,setnewdropdownlist,name,list1,details1,list2,details2,list3,details3,list4,details4,list5,details5}) 
 {
  console.log('Dropdownlist Component:', {
    newdropdownlist,
    setnewdropdownlist,
    name,
    list1,
    details1,
    list2,
    details2,
    list3,
    details3,
    list4,
    details4,
    list5,
    details5,
  });
   
    return (
    
          <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
        <ul className="dropdown-menu" onMouseEnter={()=>{  console.log('Mouse Over Event Triggered'); 
setnewdropdownlist([...newdropdownlist])}}>
           <li>
            <a className="dropdown-item" href="#"><h4>{list1}</h4>
            <p>{details1}</p>
            </a>
            </li>
            <li><a className="dropdown-item" href="#"><h4>{list2}</h4>
            <p>{details2}</p></a></li>
            <li><a className="dropdown-item" href="#"><h4>{list3}</h4>
            <p>{details3}</p></a></li>
            <li><a className="dropdown-item" href="#"><h4>{list4}</h4>
            <p>{details4}</p></a></li>
            <li><a className="dropdown-item" href="#"><h4>{list5}</h4>
            <p>{details5}</p></a></li>  
            </ul>    
            </li>  
           
        
    
  );
}

export default Dropdownlist
