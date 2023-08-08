import React, { useEffect, useState } from 'react'
import useConnect from '../hook/useConnect'
import List from '../components/donors/List';


const Verify = () => {
    const { contract } = useConnect();
    const [donors, setDonors] = useState([]);
    const [receivers, setReceivers] = useState([]);
    const [donorError, setDonorError] = useState('');
    const [ReceiverError, setReceiverError] = useState('');
    const [verified, setVerified] = useState(false)
    useEffect(() => {
        const getDonors = async () => {
            // console.log(verified);
            // console.log(account?.signer?.address)
            const donors = await contract.getDonors();

            // const nonVerified = await donors.filter(async (donor) => {
            //     const doc = await contract.whoVerified(donor[0]);
            //     console.log(doc);
            //     if (doc == "0x0000000000000000000000000000000000000000") {
            //         return donor;
            //     }
            // })
            console.log(donors);
            // console.log(donors.length);
            if (donors.length === 0) {
                setDonorError("Non-verified Donors not found");
                setDonors(donors);
            } else {
                setDonorError(" ");
                setDonors(donors);
            }
        }

        const getReceivers = async () => {
            const receivers = await contract.getReceivers();
            if (receivers.length === 0) {
                setReceiverError("Non-verified Receivers not found");
                setReceivers(receivers);
            } else {
                setReceiverError(" ");
                setReceivers(receivers);
            }
        }
        contract && getDonors()
        contract && getReceivers()

    }, [contract, verified])

    return (
        <div className='p-10 px-24 pt-28 pb-20 bg-teal-50/70 min-h-screen flex items-center justify-around'>
            <div className='flex flex-col'>

                <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'><span className='text-black'>Donors</span></p>
                <List list={donors} error={donorError} flag={true} verified={verified} setVerified={setVerified} />
            </div>
            <div className='flex flex-col'>

                <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'><span className='text-mainGreen'>Patients</span></p>
                <List list={receivers} error={ReceiverError} flag={true} verified={verified} setVerified={setVerified} />
            </div>
        </div>
    )
}

export default Verify
