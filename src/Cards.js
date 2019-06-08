import React from 'react';


const Cards = (props) => {
    const {name, email , id} = props;
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow br2  shadow-5">
            <img alt="avatar" src={`https://robohash.org/${id}?150x150`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
            
        </div>
    );
}
export default Cards;