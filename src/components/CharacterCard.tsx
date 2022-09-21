import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterCardProps = {
    
    charVal: Character;
    
}

export default function CharacterCard(props: CharacterCardProps) {

    return (

        <div>
            <p className={"character-card"}>
            <h3 >{props.charVal.name} !</h3>
        </p>
        </div>


    );

}