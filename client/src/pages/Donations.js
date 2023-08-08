import React, { useEffect, useState } from 'react'
import useConnect from '../hook/useConnect'

const Donations = () => {
    const { contract } = useConnect()
    const [user, setUser] = useState({ patient: null, doner: null, organ: null });
    const [items, setItems] = useState([]);

    useEffect(() => {
        const handleItems = async () => {
            const receivers = await contract.getVerifiedReceivers();

        }
        contract && handleItems()
    }, [])
    return (
        <div className=' flex flex-col items-center justify-evenly min-h-screen min-w-screen'>
            <p>Donations</p>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Patient Account</th>
                            <th>Doner Account</th>
                            <th>Organ</th>
                        </tr>
                    </thead>

                </table>
            </div>
        </div>
    )
}

export default Donations
