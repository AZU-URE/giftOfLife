import React, { useEffect, useState } from 'react'
import Profile from '../components/Profile'
import { useLocation } from 'react-router-dom'
import useConnect from '../hook/useConnect'

const ReceiverDetail = () => {
    const location = useLocation()
    const found = location.state.found
    const { contract, account } = useConnect()
    const [address, setAddress] = useState(null)
    const [message, setMessage] = useState('Not Received');
    const [donerAddress, setDonerAddress] = useState(null);

    useEffect(() => {
        const handleReceiver = async () => {
            setAddress(account?.signer?.address);
            console.log(address);
            try {
                if (address != null) {
                    const donerAddress = await contract.donations(address);
                    if (donerAddress != '0x0000000000000000000000000000000000000000') {
                        setDonerAddress(donerAddress);
                        setMessage("Received From")
                    }
                }

            } catch (error) {
                console.log(error);
            }

        }

        contract && handleReceiver()
    }, [address])
    return (
        <div className='flex flex-col items-center justify-end p-24'>
            <div className='flex justify-end items-end space-y-1 w-full text-right'>
                <div className='bg-mainGreen/30 p-2 rounded-xl'>
                    <p className='text-xl text-mainGreen font-bold pr-3'>{message}</p>
                    <p>{donerAddress}</p>
                </div>
            </div>
            <Profile userType='patients' found={found} />
        </div>
    )
}

export default ReceiverDetail
