import React from 'react'
import landingPageBanner from '../assets/landingPage/mainBanner2.jpg'
import useConnect from '../hook/useConnect'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const { account } = useConnect()
    const navigate = useNavigate()

    const handleRegister = () => {
        if (account?.signer) {
            navigate('/register')
        }
    }

    const handleReceive = () => { }
    return (
        <section className=' w-full h-[100vh] overflow-hidden flex bg-slate-500'>
            <div className='w-full bg-black'>
                <img src={landingPageBanner} className='-z-10 opacity-50' alt='banner_image' />
            </div>
            <div className='w-full absolute m-auto top-64 flex flex-col items-center'>
                <p className='text-7xl text-mainGreen font-dmSans font-bold'>Happiness <span className='text-white'>comes from</span> </p>
                <p className='text-7xl text-mainGreen font-dmSans font-bold'><span className='text-white'>your</span>  action.</p>
                <p className='text-base text-white font-dmSans font-light mt-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nihil tempora ad sint fugit dolores aliquid corrupti</p>
                <div className="flex space-x-5">
                    <button onClick={handleRegister} className='bg-mainGreen rounded-full hover:bg-mainGreen/80 text-white p-3 px-6 mt-8 font-medium text-lg border-white border-[1px]'>Donate</button>
                    <button onClick={handleRegister} className='bg-transparent hover:bg-mainGreen/80 rounded-full hover:text-white border-[2px] border-mainGreen text-mainGreen p-3 px-6 mt-8 font-medium text-lg'>Receive</button>

                </div>
            </div>
        </section>
    )
}

export default Hero
