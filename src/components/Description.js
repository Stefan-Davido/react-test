import {react, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const Description = () => {

    const {id} = useParams();
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchMoveLearnMethodApi()
    }, [description])

    const fetchMoveLearnMethodApi = () => {
        const options = { metod: "get"}

        fetch(`https://pokeapi.co/api/v2/move-learn-method/${id}/`, options)
        .then(data => data.json())
        .then(data => {
            var correctDesc = data.descriptions.find(x => x.language.name === 'en')
            setDescription(correctDesc)
            return data;
        })
    }

    return (
        <div>
            <h2 style={{marginLeft: 50, marginTop:50}}>Description</h2>
            <div style={{marginLeft: 50, marginRight:50, padding: 30, border:"1px solid lightblue"}}>
                <h4>Description for {`https://pokeapi.co/api/v2/move-learn-method/${id}/`}</h4>
                <p>{description.description}</p>
            </div>
        </div>
    )
}