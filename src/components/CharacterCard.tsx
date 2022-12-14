import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterCardProps = {

    charVal: Character;

}

export default function CharacterCard(props: CharacterCardProps) {

    return (

        <div className="character-card">

            <h3>{props.charVal.name} </h3>
            <img src={props.charVal.image}/>
            <h3>{props.charVal.species}</h3>
            <p>{props.charVal.status}</p>


        </div>


    );

}