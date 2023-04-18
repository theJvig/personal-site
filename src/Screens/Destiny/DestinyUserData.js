import React from 'react'; 

const DestinyUserData = ({bungieUser}) => {
    return(
        <div className="user">
            <h1 className="user-name">Welcome {bungieUser.displayName}!</h1>
            <p className="bungie-id" >Bungie ID: {bungieUser.uniqueName}</p>
        </div>
    );
}

export default DestinyUserData; 