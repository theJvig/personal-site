import React, { useState } from 'react'; 
import Card from '../../Components/UI/Card'; 
import './styles/GameSelector.scss'
import DestinySigninModal from '../../Components/Modals/DestinySigninModal';


const GameSelector = () => {
    const GameList = [
        {
            game: 'Destiny',
            hasApi: true,
            enabled: true,
        },
        {
            game: 'World Of Warcraft',
            hasApi: false,
            enabled: false,
        },
        {
            game: 'Call of Duty',
            hasApi: true,
            enabled: false,
        }

    ];
    const [isOpen, setIsOpen] = useState(false);

    const showModal = (event) => {
        setIsOpen(true);
    }

    const AllGames = GameList.map((games) => 
        <Card className="game">
            <h3 className="game-title">{games.game}</h3>
            <button className={`modal-button`} onClick={ showModal }>Login</button>
        </Card>
    );
    
    return (
        <div className="game-selector">
            <h1 className="game-list-title">Game List</h1>
                {AllGames}
                { isOpen && <DestinySigninModal setIsOpen={setIsOpen}/> }
        </div>
    );
}

export default GameSelector; 