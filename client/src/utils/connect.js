// import ethers from 'ethers'
import { DonationAbi } from './ABI'
const ethers = require("ethers")

export async function connect() {

    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
    }

    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    console.log(process.env.REACT_APP_CONTRACT_ADDRESS);
    const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, DonationAbi, signer)

    console.log(contract);

    // const provider = new ethers.JsonRpcProvider(process.env.)

    // console.log(`The contract address is:${contract.address}`);
}

