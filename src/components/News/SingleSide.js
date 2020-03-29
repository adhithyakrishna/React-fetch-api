import React from 'react';

//create a stateless component

const SingleSide = ({item}) => (
            <a href = {item.url} target="_blank">
                <div className="section">
                    <h5>{item.source.name}</h5>
                    <p>{item.title}</p>
                </div>  
            </a>
    
)

export default SingleSide;