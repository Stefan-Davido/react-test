import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export const FlavorText = () => {

    const {id} = useParams();
    const [selectByLanguage, setSelectByLanguage] = useState([]);
    const [state, setState] = useState([]);

    // *** Use location get properties {query, state, pathname} from Link router
    const data = useLocation()

    useEffect(() => {
        setState(data.state);

        var filter = data.state.flavor_text_entries.filter((x) => {
            if( x.language.url.split('/').slice(-2)[0] === id)
                return x;
        })
        
        setSelectByLanguage(filter)
    }, [])


    return (
        <div>
            <h2 style={{paddingLeft:30, color:"red"}}>Flavor Text</h2>
            {
                selectByLanguage &&
                     selectByLanguage.map((el, i )=> {
                        return (
                            <div key={i} style={{padding:30, border:"1px dashed red"}}>
                                <span>Flavor: &nbsp;&nbsp;<b>{el.flavor_text}</b></span>
                                <br/>
                                <span style={{color:"blue"}}>{el.language.name.toString().toUpperCase()}</span>
                                <br/>
                                <br/>
                                <span>Version name: <b>{el.version.name}</b></span>
                            </div>
                        )
                    })
            }
        </div>
    )
}