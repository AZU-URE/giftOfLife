import React, { useState } from 'react'
import useConnect from '../../hook/useConnect'

const List = ({ list, error, flag, verified, setVerified }) => {
    const { contract } = useConnect()
    const verify = async (donor, event) => {
        console.log(event?.target);
        event.target.textContent = "Processing.. "
        const requiredDonor = [
            donor[0],
            donor[1],
            donor[2],
            donor[3],
            donor[4],
            donor[5],
            donor[6],
            donor[7]
        ];
        setVerified(true);
        // console.log(requiredDonor);
        const tx = await contract.verify(requiredDonor);
        // console.log("tx processed");
        await tx.wait(1);
        console.log(tx);
        setVerified(false);
        // console.log("tx done");
        // setTimeout(() => setVerified(false), 4000)
    }
    return (
        <div>
            {
                list.map((donor) => (
                    <div className=' m-10 p-3 bg-mainGreen/20 flex flex-col' key={donor[0]}>
                        <p>Address: {donor[0]}</p>
                        <p>Name: {donor[1]}</p>
                        <p>Organ: {donor[5].toLocaleString()}</p>
                        <p>Blood Group : {donor[6].toLocaleString()}</p>
                        {flag && <button id={donor[0]} onClick={(event) => verify(donor, event)} className=' bg-transparent hover:bg-mainGreen/80 rounded-full hover:text-white border-[2px] border-mainGreen text-mainGreen p-2 px-4 m-8  font-medium text-lg'>Verify</button>}
                    </div>

                ))}
            {error && <p className='text-center text-red-500 text-2xl font-bold'>{error}</p>}

        </div>
    )
}

export default List
