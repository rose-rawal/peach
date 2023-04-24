import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context'
const Cocktail=()=>{
    const {cocktails}=useGlobalContext();
    const handleClick=(n)=>{
        
    }
    return (<div className='dataContainer'>
        {cocktails.map((n)=>{
            return(<Link to={`/cocktail/id:${n.id}`} key={n.id} className='eachData'>
                <img src={n.image} alt={n.name} className='image'/>
                <h2 className='plain'>{n.name}</h2>
                <p className='left'>{n.info}</p><p className='right plain'>{n.glass}</p>
            </Link>
            )
        })}
    </div>)
}
export default Cocktail