import React from 'react'; 
import './styles/Card.scss';

const Card = (props, {className}) => {
    return(
        <div className={`card ${props.className}`}>{props.children}</div>
    );
}

export default Card;

