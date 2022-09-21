import "./CharacterGallery.css"
import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";

type CharacterGalleryProps = {

    characters: Character[];

}

export default function CharacterGallery(props: CharacterGalleryProps) {


    return (
        <div className={"cards"}>
            <span className={"card"}>


                {props.characters.map((char) => <CharacterCard charVal={char}/>)}
            </span>

        </div>


    )

}
