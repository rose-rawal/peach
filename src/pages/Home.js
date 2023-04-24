import React, { useEffect, useState } from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import abc from '../data'
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const Home=()=>{
    
    return (
        <div className='container'>
            <SearchForm/>
            <CocktailList/>
        </div>
    )

}
export default Home;