import React from 'react'; 

const DestinyCharacterData = ({characters}) => {
    const showCharacterStats = () => {
        alert('test'); 
    }
    const characterClass = [
        "Titan",
        "Hunter",
        "Warlock"
    ]
    const characterList = characters.map((character) => 
        <li className="character" onClick={ showCharacterStats } 
            style={{
                backgroundImage: `url("https://www.bungie.net${character.emblemBackgroundPath}")`
            }}
        >
            <p className="character-class">{characterClass[character.classType]}</p>
            <p className="light-level">{character.light}</p>
        </li>
    );
    
    return (
        <div className="characters">
            <ul className="character-list">
                {characterList}
            </ul>
        </div>
    );
}

export default DestinyCharacterData; 