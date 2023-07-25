
import useConnect from '../hook/useConnect'
import React, { useEffect, useState } from 'react'
// import ReceiverCard from '../components/receivers/ReceiverCard'

const AllDonors = () => {
    const { contract, account } = useConnect()
    const [donors, setDonors] = useState([])
    const [error, setError] = useState('')
    // console.log(contract);
    useEffect(() => {
        const getDonors = async () => {
            console.log(account?.signer?.address)
            const donors = await contract.getDonors();
            // console.log(donors.length);
            if (donors.length == 0) {
                setError("Donors not found");
            } else {
                setDonors(donors);
                // console.log(donors[0][4]);
            }
        }

        contract && getDonors()
    }, [contract])

    return (
        <section className='p-10 px-24 pt-28 pb-20 bg-teal-50/70 min-h-screen'>
            <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'>Our<span className='text-mainGreen'> Donors</span></p>
            {
                donors.map((donor) => (
                    <div className=' m-10 p-3 bg-mainGreen/20'>
                        <p>Address: {donor[0]}</p>
                        <p>Name: {donor[1]}</p>
                        {donor[3] === false ? <p>Donated: false</p> : <p>Donated: true</p>}
                        {/* form the verified wala function */}
                        {donor[4] === false ? <p>verified: false</p> : <p>verified: true</p>}

                        <p>Organ: {donor[5].toLocaleString()}</p>
                        <p>Blood Group : {donor[6].toLocaleString()}</p>
                    </div>
                ))}
            {error && <p className='text-center text-red-500 text-2xl font-bold'>{error}</p>}
        </section>
    )
}

export default AllDonors
