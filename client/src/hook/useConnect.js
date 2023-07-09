import React, { useEffect, useState } from 'react'
import ABI from '../utils/ABI.json'
import { ethers } from 'ethers'

const useConnect = () => {
    const [accountDteatil, setAccountDetail] = useState({
        provider: null,
        contract: null,
        signer: null
    })

    useEffect(() => {
        const connectWallet = async () => {
            const contractAddress = ""
            const abi = ABI.abi
            try {
                const { ethereum } = window
                if (ethereum) {
                    await ethereum.request
                }
            } catch (err) {

            }

        }
    })
    return (
        <div>

        </div>
    )
}

export default useConnect
