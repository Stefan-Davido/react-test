import { useEffect, useState } from "react"
import { json, Link } from "react-router-dom";

export const Apies = () => {
    const [api, setApi] = useState()
    const [regions, setRegions] = useState([]);
    const [moveLearn, setMoveLears] = useState();
    const [pokedexes, setPokedexes] = useState();
    const [versions, setVersions] = useState();

    // *** when state of variables in [] is change useEffect will be invoked ***
    useEffect(() => {
        getApis();
    }, [api])
    
    const addValues = (data) => {
        setApi(data);
        setRegions(data.regions);
        setMoveLears(data.move_learn_methods);
        setPokedexes(data.pokedexes);
        setVersions(data.versions);
    }
    
    const getApis = () => {
        const options = { method:"get" }
        
        fetch("https://pokeapi.co/api/v2/version-group/10/", options)
        .then(result => result.json())
        .then(data =>  { 
            addValues(data);
            return data;
        })
    }

    return (
        <div>
            <div  style={{textAlign:"center",backgroundColor:"lightblue"}}>
                <h1>API's</h1>
            </div>
            {
                regions
                ?
                    regions.map((el, i ) => {
                        return (
                            <div  key={i} style={{paddingLeft:90}}>
                                <h3>Region name:</h3>
                                <p>{el.name}</p>
                            </div>
                        )
                    })                          
                :
                    <h1>No regions</h1>
            }

            <div  style={{textAlign:"center"}}>
                {
                    moveLearn
                    ?
                        moveLearn.map((el, i ) => {
                            var id = el.url.split('/')[el.url.split('/').length -2].split(':')[0]

                            return(
                                
                                <div key={i} style={{border:"1px solid red"}}>
                                    <p>Move learn Method name : <b>{el.name}</b></p>
                                    <p>URL: <Link to={`/apis/description/${id}`}><b>{el.url}</b></Link></p>
                                    
                                </div>
                            )
                        }) 
                    :
                        <h4>No mve learn method</h4>
                }
            </div>
        </div>
    )
}