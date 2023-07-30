
import useConnect from '../hook/useConnect'
import React, { useEffect, useState } from 'react'
// import ReceiverCard from '../components/receivers/ReceiverCard'

const AllDonors = () => {
    const { contract, account } = useConnect()
    const [donors, setDonors] = useState([])
    const [verifiedDonors, setVerifiedDonors] = useState([])
    const [verify, setVerify] = useState(false)
    const [error, setError] = useState('')
    const [errorVerfiy, setErrorVerfiy] = useState('')
    // console.log(contract);
    useEffect(() => {
        const getDonors = async () => {
            console.log(account?.signer?.address)
            const donors = await contract.getDonors();
            // console.log(donors.length);
            if (donors.length === 0) {
                setError("Donors not found");
            } else {
                setDonors(donors);
                // console.log(donors[0][4]);
            }
        }

        const getVerifiedDonors = async () => {
            const donors = await contract.getVerifiedDoners();
            if (donors.length === 0) {
                setErrorVerfiy("No verified Donors");
            } else {
                setVerifiedDonors(donors);
                // console.log(donors[0][4]);
            }
        }

        contract && getDonors()
        contract && getVerifiedDonors()
    }, [contract, verify])

    const handleVerify = () => {
        setVerify(true);
    }
    const handleAll = () => {
        setVerify(false);
    }

    return (
        <section className='p-10 px-24 pt-28 pb-20 bg-teal-50/70 min-h-screen'>
            <div className='flex items-center justify-center space-x-5 mb-10 text-xl'>
                <button className={`p-5 rounded-md ${verify ? "bg-mainGreen" : "bg-slate-400"} text-white font-bold`} onClick={handleVerify}>Verified Donors</button>
                <button className={`px-10 py-5 rounded-md ${verify ? "bg-slate-400" : "bg-mainGreen"} text-white font-bold`} onClick={handleAll}>All Donors</button>
            </div>
            <div className='bg-mainGreen/20 p-10 rounded-md '>

                {
                    verify
                        ?
                        <div>
                            <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'>Our<span className='text-mainGreen'> Verified Donors</span></p>
                            {

                                verifiedDonors.map((donor) => (
                                    <div className=' m-10 p-3 bg-mainGreen/20'>
                                        <p>Address: {donor[0]}</p>
                                        <p>Name: {donor[1]}</p>
                                        <p>Organ: {donor[5].toLocaleString()}</p>
                                        <p>Blood Group : {donor[6].toLocaleString()}</p>
                                    </div>
                                ))}
                            {error && <p className='text-center text-red-500 text-2xl font-bold'>{errorVerfiy}</p>}
                        </div>
                        :
                        <div>
                            <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'>Our<span className='text-mainGreen'> Donors</span></p>
                            {
                                donors.map((donor) => (
                                    <div className=' m-10 p-3 bg-mainGreen/20'>
                                        <p>Address: {donor[0]}</p>
                                        <p>Name: {donor[1]}</p>
                                        <p>verify: {donor[4] === false ? "false" : "true"}</p>
                                        <p>Organ: {donor[5].toLocaleString()}</p>
                                        <p>Blood Group : {donor[6].toLocaleString()}</p>
                                    </div>

                                ))}
                            {error && <p className='text-center text-red-500 text-2xl font-bold'>{error}</p>}
                        </div>

                }
            </div>
        </section>
    )
}

export default AllDonors
