import React from 'react'
import pic from '../assets/landingPage/celebpic/garima2.jpg'

const CelebCard = () => {
    return (
        <div className='flex flex-col items-center w-fit mb-10'>
            <div className='w-54 h-54 bg-black rounded-full z-10 border-mainGreen/70 border-4' >
                <img src={pic} alt='profile pic' className='w-52 h-52 rounded-full object-fit shadow-xl' />
            </div>
            <div className='shadow-2xl shadow-slate-400 bg-mainGreen/40 w-full text-center pb-5 pt-28 px-16 -mt-20 rounded-lg '>
                <p className='text-green-900 font-dmSans text-2xl font-bold '>Garima Mangal</p>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </div>
    )
}

export default CelebCard
