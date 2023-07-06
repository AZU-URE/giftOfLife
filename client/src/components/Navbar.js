import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 z-10 bg-slate-800 bg-opacity-50 w-full backdrop-filter backdrop-blur-2xl'>
            <div className='flex justify-between font-dmSans p-4 items-center'>
                <ul className='float-left flex space-x-4 text-white'>
                    <li className='text-mainGreen'>logo</li>
                    <li className=''>About</li>
                    <li>Charities</li>
                    <li>Celeb Donation</li>
                </ul>
                <div>
                    <button className='bg-mainGreen rounded-md hover:bg-mainGreen/80 text-white p-2 font-medium'>Donate Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
