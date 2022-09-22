import "./CharacterGallery.css"
import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import { useState } from "react";


type CharacterGalleryProps = {

    characters: Character[];

}

export default function CharacterGallery(props: CharacterGalleryProps) {

    const [filterText, setFilterText] = useState( "");

    const result = props.characters.filter((char) => char.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));

    return (
           <div>
            <input className={"input"}
                onChange={(event) =>
                setFilterText(event.target.value)}/>

            <p>Typed in: {filterText}</p>
            <div className="cards">
                {result.map((char) =>
                    <div className={"card"}>
                        <CharacterCard charVal={char}/>
                    </div>)}


            </div>

        </div>
    )

}
