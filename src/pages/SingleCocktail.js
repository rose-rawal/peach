import React, { useEffect, useState } from 'react'
// import Cocktail from '../components/cocktail'
// import SearchForm from '../components/SearchForm'
import {useParams} from 'react-router-dom'
import { useGlobalContext } from '../context'
const SingleCocktail=()=>{
    const {id}=useParams()
    const iddiv=id.split(':')
    const{cocktails}=useGlobalContext()
    const [data,setData]=useState({})
    const datacollect=cocktails.find(n=>n.id===iddiv[1])
    console.log(datacollect)
    useEffect(()=>{
         setData(datacollect)
    },[datacollect])
    // console.log(iddiv)
    return (<section className='singleCocktail'>
        <h1>{data.name}</h1>
        
        <img src={data.image} alt={data.name} />
        
        <h3>Description:</h3>
        <br />
        <p><span>Type:</span> {data.info}</p>
        <p><span>Type of Glass:</span> {data.glass}</p>
        <p><span>Ingredients:</span> {data.ingredients}</p>
        <p><span>Instruction:</span> {data.instr}</p>
    </section>)

}
export default SingleCocktail;