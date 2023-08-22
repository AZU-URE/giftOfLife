import React, { useEffect, useState } from 'react'
import useConnect from '../hook/useConnect'

const Donations = () => {
    const { contract } = useConnect()
    const [user, setUser] = useState({ patient: null, doner: null, organ: null });
    const list = [];
    const [donations, setDonations] = useState([]);

    useEffect(() => {

        const handleDonations = async () => {
            const donation = await contract.getDonationDetails();
            setDonations(donation);
            // console.log(donations);
            // console.log(donation);
        }
        contract && handleDonations()
    }, [])

    // useEffect(() => {
    //     console.log(items.length);
    //     const handleItems = async () => {
    //         for (let i = 0; i < items.length; i++) {
    //             const patient = items[i][0];
    //             const organ = parseInt(items[i][5]);
    //             const doner = await contract.donations(patient);
    //             setUser({ patient: patient, doner: doner, organ: organ });
    //             console.log(user);
    //             list.push(user);
    //         }
    //     }

    //     console.log(list);
    //     handleItems()
    // }, [items])

    return (
        <div className=' flex flex-col items-center justify-center space-y-24 min-h-screen min-w-screen'>
            <p className='text-3xl font-bold text-orange-500'>Donations</p>
            <div>
                <table className=' bg-mainGreen/25 rounded-lg'>
                    <thead className=''>
                        <tr className=''>
                            <th className='text-xl text-mainGreen p-4'>Patient Account</th>
                            <th className='text-xl text-mainGreen p-4'>Doner Account</th>
                            <th className='text-xl text-mainGreen p-4'>Organ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((donation) => (
                            <tr >
                                <td className='p-4'>{donation[0]}</td>
                                <td className='p-4'>{donation[1]}</td>
                                <td className='p-4 text-center'>{parseInt(donation[2])}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Donations
