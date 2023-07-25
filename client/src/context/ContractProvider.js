import { createContext, useState } from "react";


const contractContext = createContext({})

export const ContractProvider = ({ children }) => {
    const [account, setAccount] = useState({})
    const [contract, setContract] = useState(null)
    return (
        <contractContext.Provider value={{ account, setAccount, contract, setContract }}>
            {children}
        </contractContext.Provider>
    );
}
export default contractContext;
