import React, { useReducer } from 'react'; 
import { BungieUser, DestinyCharacters, DestinySingleCharacterData } from './DestinyApi'; 
import DestinyUserData from './DestinyUserData'; 
import './Styles/Destiny.scss';

const Destiny = () => { 
    const bungieUserResponse = BungieUser(); 
    const destinyCharacterResponse = DestinyCharacters(); 
    DestinySingleCharacterData(); 
    return (
        <div className="destiny container">
            <DestinyUserData bungieUser={bungieUserResponse}/> 
            {destinyCharacterResponse}
        </div>
    );
}

export default Destiny; 