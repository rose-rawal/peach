import React from 'react'
import Loading from './loading'
import Cocktail from './cocktail'
import { useGlobalContext } from '../context'
const CocktailList=()=>{
    const {cocktails,loading}=useGlobalContext();
    // console.log(cocktails)
    if(loading){
        return <Loading/>
    }
    if(cocktails.length<1){
        return(<h2>No cocktails matched your search</h2>)
    }
    return <Cocktail/>
}
export default CocktailList