import React from 'react'

const Navbar = ({ aboutRef, CharitiesRef, CelebRef }) => {
    const clickAbout = () => {
        aboutRef.current?.scrollIntoView({ behaviour: 'smooth' })
    }
    const clickCharities = () => {
        CharitiesRef.current?.scrollIntoView({ behaviour: 'smooth' })
    }
    const clickCeleb = () => {
        CelebRef.current?.scrollIntoView({ behaviour: 'smooth' })
    }
    return (
        <>
            <nav className='fixed top-0 z-20 bg-slate-400 bg-opacity-50 w-full backdrop-filter backdrop-blur-2xl'>
                <div className='md:flex hidden justify-between font-dmSans p-4 items-center'>
                    <ul className='float-left flex space-x-4 text-white'>
                        <li className='text-mainGreen'>logo</li>
                        <li className='' onClick={clickAbout}>About</li>
                        <li onClick={clickCharities}>Charities</li>
                        <li onClick={clickCeleb}>Celeb Donation</li>
                    </ul>
                    <div className='flex space-x-3'>
                        <button className='bg-mainGreen rounded-md hover:bg-mainGreen/80 text-white p-2 px-3.5 font-medium'>Connect</button>
                        <button className='bg-transparent rounded-md hover:bg-mainGreen/80 hover:text-white border-[2px] border-mainGreen text-mainGreen p-2 px-3.5 font-medium'>SignUp</button>
                        {/* <button className='bg-mainGreen rounded-md p-0.5 font-medium'><p className='bg-slate-800 rounded-md p-1.5 px-3 hover:text-white text-mainGreen hover:bg-mainGreen'>SignUp</p></button> */}
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
