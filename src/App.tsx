import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from './components/CharacterGallery';
import {Character} from './model/Character';
import axios from 'axios';


export default function App() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])


    return (

        <div>

            <img src={"https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"}/>
            <h1>Rick and Morty !</h1>
            <h3> Type in ... : </h3>
            <CharacterGallery characters={characters}/>


        </div>


    );

}



