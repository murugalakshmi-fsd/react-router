import React from 'react'

const Cybercard=({image, heading, cont, more, date, comments})=>{
  
    return (
        <div className='col-4'>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." style={{height:"200", width:"200"}}/>
          <div className="card-body">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{cont}</p>
            <p>{more}</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">{date}</small>
            <span>{comments}</span>
          </div>
        </div>
        </div>
      );
    }

export default Cybercard