import axios from 'axios';
import { url } from '../utils/url';
import React, { useState, createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [packages, setPackages] = useState([]);

    const getHomePackages = async () => {
        try {
            const { data } = await axios.get(`${url}/packages/home`);
            setPackages(data.packages);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHomePackages();
        setIsLoading(false);
    }, []);

    return (
        <AppContext.Provider value={{
            packages,
            isLoading,
            getHomePackages,
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };