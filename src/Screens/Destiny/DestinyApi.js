import React, { useEffect, useState } from 'react';
import DestinyCharacterData from './DestinyCharacterData';

const baseUrl = "https://www.bungie.net/Platform/";
const membershipId = "4611686018433134041";
const membershipType = "2";
const testCharacter = "2305843009264568973";

export const BungieUser = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch(`${baseUrl}User/GetMembershipsById/${membershipId}/${membershipType}`,
        {
            method: 'GET',
            headers: {
                'x-api-key': '983b099786ee44a3b8111d70768d2058'
            }
        }
        
        )
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const bungieUser = items.Response.bungieNetUser;
        return bungieUser;
    }
}

export const DestinyCharacters = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch(`${baseUrl}Destiny2/${membershipType}/profile/${membershipId}/?components=200`,
        {
            method: 'GET',
            headers: {
                'x-api-key': '983b099786ee44a3b8111d70768d2058'
            }
        }
        
        )
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log(items); 
        const characters = Object.values(items.Response.characters.data);
        
        return (
            <DestinyCharacterData characters={characters} /> 
        ); 
    }
}

export const DestinySingleCharacterData = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}Destiny2/Stats/Leaderboards/${membershipType}/${membershipId}/${testCharacter}`,
        {
            method: 'GET',
            headers: {
                'x-api-key': '983b099786ee44a3b8111d70768d2058',
            }
        }

        )
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log(items); 
        //const characters = Object.values(items.Response.characters.data);
        
        return (
            <p>this is a test</p>
        ); 
    }
}