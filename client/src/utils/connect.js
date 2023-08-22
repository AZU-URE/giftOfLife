// import ethers from 'ethers'
import { DonationAbi } from './ABI'
const ethers = require("ethers");

export async function connect() {

    // const { setAccount, account } = useConnect()
    const contractAddress = "0x2697a2A91d21179A61B15FB3c66851469c8215f9"


    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new ethers.Contract(contractAddress, DonationAbi, signer)
        contract.on("MatchFound", (msg) => {
            console.log(msg);
        })
        // const address = await signer.getAddress()
        // console.log(signer?.address);
        return ({ provider, contract, signer })
    } else {
        console.log("Metamask not there");
    }
    // const provider = new ethers.BrowserProvider(window.ethereum)

    // console.log(process.env.REACT_APP_CONTRACT_ADDRESS);

    // console.log(contract)

    // const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL)
    // const signer = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY_DONOR2, provider);
    // const signer = await provider.getSigner("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
    // const signer = donor2
    // const con/tract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, DonationAbi, signer)
    // console.log(signer);
    // console.log(contract)
    // return ({ provider, contract, signer })



    // console.log(`The contract from account is:${account.contract}`);

    // try {
    //     const { ethereum } = window;
    //     if (ethereum) {
    //         await ethereum.request({
    //             method: "eth_requestAccounts"
    //         })
    //     }
    //     const provider = new ethers.BrowserProvider(ethereum)
    //     const signer = await provider.getSigner()
    //     const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, DonationAbi, signer)
    //     return ({ provider, contract, signer })

    // } catch (err) { console.log(err); }
}

