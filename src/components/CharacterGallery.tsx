import "./CharacterGallery.css"
import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";

type CharacterGalleryProps = {

    characters: Character[];

}

export default function CharacterGallery(props: CharacterGalleryProps) {


    return (
        <div className="cards">


            {props.characters.map((char) => <div className="card"><CharacterCard charVal={char}/></div>)}


        </div>


    )

}
