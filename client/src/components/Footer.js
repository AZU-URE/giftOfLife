import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='bg-slate-950 px-24 p-20 flex justify-around text-white'>
            <div className='flex justify-around  w-full'>
                <div className=' space-y-5'>
                    <p className='font-dmSans font-bold text-xl'>About</p>
                    <div className='space-y-3'>
                        <p>How-to</p>
                        <p>Help Desk</p>
                        <p>Community</p>
                    </div>
                </div>
                <div className='  space-y-5'>
                    <p className='font-dmSans font-bold text-xl'>Terms and Conditions</p>
                    <div className='space-y-3'>
                        <p>Report violations</p>
                        <p>Policy</p>
                        <p>Disclaimer</p>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-end items-end'>
                <p className='flex items-center'><span className='mr-2'>Made with</span>  <BsFillSuitHeartFill style={{ fontSize: '20px' }} className='text-red-500' /><span className='ml-2'>by Tech Valkyries</span> </p>
            </div>

        </footer>
    )
}

export default Footer
