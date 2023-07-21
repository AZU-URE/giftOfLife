import { createContext, useState } from "react";


const contractContext = createContext({})

export const ContractProvider = ({ children }) => {
    const [account, setAccount] = useState({})
    return (
        <contractContext.Provider value={{ account, setAccount }}>
            {children}
        </contractContext.Provider>
    );
}

export default contractContext;
