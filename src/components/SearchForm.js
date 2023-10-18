import React from 'react'
import { useGlobalContext } from '../context'
const SearchForm=()=>{
    const {setSearchTerm}=useGlobalContext()
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
    }
    return (<div className='search'>
        <section>Search Cocktail</section>
        <input type="text"  className='searchbar' onChange={handleChange} autoFocus/>
        {/* <input type="button" value='Search' className='searchBtn'onClick={handleClick}/> */}
    </div>)
}
export default SearchForm