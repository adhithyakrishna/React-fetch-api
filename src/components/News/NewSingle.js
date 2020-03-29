import React from 'react';

//creating a stateless component
const NewSingle = ({item}) => (
    
    <div className="col s4">
        <div className ="card">
            <div className = "card-image">
                <img src = {item.urlToImage} alt={item.title}></img>
                <span className ="card-title">{item.source.name}</span>
            </div>
        </div>
        <div className="card-content">
            <p>{item.title}</p>
        </div>
        <div className="card-action">
            <a href={item.url} target="_blank">Full article</a>
        </div>
    </div>
);


export default NewSingle;
