import React, { createContext, useEffect, useState } from 'react'
import { fetchApiData } from '../utils/api';

export const AppContext = createContext();


const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState(false)
    const [selectCategory, setSelectCategory] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        // fetchSelectCategory(selectCategory)
    }, [selectCategory])


    const fetchSelectCategory = (query) => {
        setLoading(true)
        fetchApiData(`search/?q=${query}`).then((res) => {
            console.log(res.contents);
            setLoading(false)
        })
    }
    return (
        <AppContext.Provider value={{
            loading, setLoading,
            searchResults, setSearchResults,
            selectCategory, setSelectCategory,
            mobileMenu, setMobileMenu
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider