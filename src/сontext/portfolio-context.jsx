import { createContext, useState, useEffect, useContext } from 'react'
import {fetchPortfolio} from "../api.js";


const PortfolioContext = createContext({
    portfolios:[],
    loading: false,
})

export function PortfolioContextProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {

        async function preload() {

            setLoading(true);

            let portfolios_ = await fetchPortfolio();

            setPortfolios(portfolios_);

            setLoading(false);
        }

        preload();

    }, [])

    return (
        <PortfolioContext.Provider value={{ loading, portfolios }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioContext

export function useCrypto() {
    return useContext(PortfolioContext)
}

