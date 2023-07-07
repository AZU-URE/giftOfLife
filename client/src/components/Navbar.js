import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='fixed top-0 z-10 bg-slate-800 bg-opacity-50 w-full backdrop-filter backdrop-blur-2xl'>
                <div className='md:flex hidden justify-between font-dmSans p-4 items-center'>
                    <ul className='float-left flex space-x-4 text-white'>
                        <li className='text-mainGreen'>logo</li>
                        <li className=''>About</li>
                        <li>Charities</li>
                        <li>Celeb Donation</li>
                    </ul>
                    <div className='flex space-x-3'>
                        <button className='bg-mainGreen rounded-md hover:bg-mainGreen/80 text-white p-2 font-medium'>Donate Now</button>
                        <button className='bg-mainGreen rounded-md  text-white p-0.5 font-medium'><p className='bg-slate-800 rounded-md p-1.5 px-3 hover:text-white text-mainGreen hover:bg-mainGreen'>Join Now</p></button>
                    </div>
                </div>
                {/* make hamburger type resonsive navbar */}
                <div className='md:hidden text-white'>
                    hambu
                </div>
            </nav>
        </>
    )
}

export default Navbar
