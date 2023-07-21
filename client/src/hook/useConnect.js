import { useContext } from 'react'

import contractContext from '../context/ContractProvider'

const useConnect = () => {
    return (
        (useContext(contractContext))
    )
}

export default useConnect
