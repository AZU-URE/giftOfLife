// import ethers from 'ethers'
import { DonationAbi } from './ABI'
const ethers = require("ethers")
// import useConnect from '../hook/useConnect'

export async function connect() {

    // const { setAccount, account } = useConnect()

    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
    }
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    // console.log(process.env.REACT_APP_CONTRACT_ADDRESS);
    const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, DonationAbi, signer)

    return ({ provider, contract, signer })
    // console.log(contract)

    // const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL)
    // const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, DonationAbi, provider)
    // console.log(contract)



    // console.log(`The contract from account is:${account.contract}`);
}

