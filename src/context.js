import React,{useState,useEffect,useContext} from 'react'
import { useCallback } from 'react'
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext=React.createContext()
const AppProvider=({children})=>{
    const [loading,setLoading]=useState(true);
    const [searchTerm,setSearchTerm]=useState('a');
    const [cocktails,setCocktails]=useState([]);
    const fetchDrinks=async()=>{
        setLoading(true)
        try{
            const respose=await fetch(`${url}${searchTerm}`)
            const data=await respose.json();
            console.log(data);
            const {drinks}=data;
            if(drinks){
                const newCocktails=drinks.map((item)=>{
                    const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
                    return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
                })
                setCocktails(newCocktails)
            }else{
                setCocktails([])
            }setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchDrinks()
    },[searchTerm])
    return(
        <AppContext.Provider value={{loading,cocktails,setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}