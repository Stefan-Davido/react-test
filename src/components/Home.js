import React, { useEffect, useState } from "react"
import { Routes, Route, Link, Router } from "react-router-dom";
import { FlavorText } from "./FlavorText";
import { Species } from "./Species";

export const SpeciesContext = React.createContext();
export const Home = () => {
    const [api, setApi] = useState({});
    const [genera, setGenera] = useState([]); 

    useEffect(()=> {
        fetchApi()
    }, [])

    const fetchApi = () => {
        const options = { metod: "get"}

        fetch("https://pokeapi.co/api/v2/pokemon-species/132/", options)
        .then(data => data.json())
        .then(data => { 
            setApi(data);
            setGenera(data.genera)
            return data;
        })
    }

    return (
        <div >
            <h1 style={{marginLeft:100}}>HOME</h1>

            <SpeciesContext.Provider value={api}>
                {
                    genera && 
                        genera.map((el, i ) => {
                            var languageId = el.language.url.split('/').slice(-2)[0];

                            return (
                                <div key={i} style={{padding:30, border:"1px solid red"}}>   
                                    <h1>genera</h1>
                                    <h1>{el.genus}</h1><span>{el.language.name}</span>
                                    <br/>
                                    <Link to={{ pathname: `/flavortext/${languageId}`}}  state={api}>Get Flavor texts by language</Link>
                                </div>
                            )
                        })
                }    
            </SpeciesContext.Provider>
        </div>
    )
}