import type { PokemonProps } from "../interfaces";


export function View(props: PokemonProps){
    return(
    <div>
        <h2>{props.name}</h2>
        <img src={props.sprites.front_default} alt={props.name} />
        <p>height: {props.height}</p>
        <p>weight: {props.weight}</p>
    </div>
    );
}
