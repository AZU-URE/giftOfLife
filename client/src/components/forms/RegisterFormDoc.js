import React, { useEffect, useState } from 'react'
import useConnect from '../../hook/useConnect'
import { useForm } from 'react-hook-form'

const RegistrationFomrDoc = () => {
    const { contract, account } = useConnect()
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState('')    // const [dono]

    const handleSubmitBtn = async (data) => {
        try {
            const tx = await contract.setDoctor(account?.signer?.address, data.name, data.license)
            setMessage('tx is being processed')
            await tx.wait(1)
            console.log(`tx hash is : ${tx.hash}`);
            setMessage("You are succesfully registered, Go back and click on same btn after txn is successful")
        } catch (error) {
            if (error.message.includes("You have already registered")) {
                setMessage("You have already registered");
            } else {
                console.log(error);
            }
        }
    }
    return (
        <div className="flex flex-col items-center justify-between">

            <form onSubmit={handleSubmit(handleSubmitBtn)} className='flex flex-col space-y-8 border-2 rounded-md border-mainGreen p-10'>
                <div className='flex space-x-8 items-center justify-between'>
                    <label htmlFor='fullName' className='text-lg font-dmSans text-mainGreen font-bold'>Full Name</label>
                    <input className='p-2 bg-gray-800/10 rounded-md' type="text" name="name" {...register('name', {
                        maxLength: 64
                    })} required autoFocus />
                </div>

                <div className='flex space-x-8 items-center justify-between'>
                    <label htmlFor='fullName' className='text-lg font-dmSans text-mainGreen font-bold'>License</label>
                    <input className='p-2 bg-gray-800/10 rounded-md' type="text" name="license" {...register('license', {
                        maxLength: 64
                    })} required autoFocus />
                </div>
                <button className='bg-transparent rounded-md hover:bg-mainGreen/80 hover:text-white border-[2px] border-mainGreen text-mainGreen p-2 px-3.5 font-bold text-lg`'>Submit</button>
            </form>
            <p className='text-red-500 p-10'>{message}</p>
        </div>
    )
}

export default RegistrationFomrDoc
