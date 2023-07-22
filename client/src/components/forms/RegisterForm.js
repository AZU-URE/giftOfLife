import React from 'react'
import useConnect from '../../hook/useConnect'
import { useForm } from 'react-hook-form'

const Donate = () => {
    const { contract, account } = useConnect()
    const { register, handleSubmit } = useForm()

    const handleSubmitBtn = async (data) => {
        // await contract.setUser(account?.signer?.address, data.name, data.organ, data.bloodGroup, data.userType)
        console.log(await contract.getDonors());
        // console.log(data.name);
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitBtn)} className='flex flex-col space-y-8 border-2 rounded-md border-mainGreen p-10'>
            <div className='flex space-x-8 items-center justify-between'>
                <label htmlFor='fullName' className='text-lg font-dmSans text-mainGreen font-bold'>Full Name</label>
                <input className='p-2 bg-gray-800/10 rounded-md' type="text" name="name" {...register('name', {
                    maxLength: 64
                })} required autoFocus />
            </div>

            <div className='flex space-x-8 items-center justify-between'>
                <p className='text-lg font-dmSans text-mainGreen font-bold'>User Type</p>
                <div className='flex space-x-2'>
                    <label htmlFor='donor'>Donate </label>
                    <input type='radio' name='type' id='donor' value={0} {...register('userType')} required />
                    <label htmlFor='receiver'>Patient </label>
                    <input type='radio' name='type' id='receiver' value={1} {...register('userType')} required />
                </div>
            </div>
            <div className="flex space-x-8 items-center justify-between">
                <label htmlFor='organ' className='text-lg font-dmSans text-mainGreen font-bold'>Organ</label>
                <select name='organ' id='organ' {...register("organ")} className='bg-gray-800/10 p-2' required>
                    <option value="0">Liver</option>
                    <option value="1">Eye</option>
                    <option value="2">Kidney</option>
                    <option value="3">Lung Lobe</option>
                    <option value="4">Pancreas</option>
                </select>
            </div>
            <div className="flex space-x-8 items-center justify-between">
                <label htmlFor='bloodGroup' className='text-lg font-dmSans text-mainGreen font-bold'>BloodGroup</label>
                <select name='bloodGroup' id='bloodGroup' {...register("bloodGroup")} defaultValue='none' className='bg-gray-800/10 p-2' required>
                    <option value="0">A+</option>
                    <option value="1">A-</option>
                    <option value="2">B+</option>
                    <option value="3">B-</option>
                    <option value="4">O+</option>
                    <option value="5">O-</option>
                    <option value="6">AB+</option>
                    <option value="7">AB-</option>
                </select>
            </div>
            <button className='bg-transparent rounded-md hover:bg-mainGreen/80 hover:text-white border-[2px] border-mainGreen text-mainGreen p-2 px-3.5 font-bold text-lg`'>Submit</button>
        </form>
    )
}

export default Donate
