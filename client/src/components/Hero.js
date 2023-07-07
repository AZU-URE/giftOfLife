import React from 'react'
import landingPageBanner from '../assets/landingPage/mainBanner2.jpg'

const Hero = () => {
    return (
        <section className=' w-full h-fit flex bg-slate-500'>
            <div className='w-full bg-black'>
                <img src={landingPageBanner} className='-z-10 opacity-50' />
            </div>
            <div className='w-full absolute m-auto top-64'>
                <p className='text-7xl text-mainGreen font-dmSans font-bold'>Happiness <span className='text-white'>comes from</span> </p>
                <p className='text-7xl text-mainGreen font-dmSans font-bold'><span className='text-white'>your</span>  action.</p>
                <p className='text-base text-white font-dmSans font-light mt-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nihil tempora ad sint fugit dolores aliquid corrupti</p>
                <button className='bg-mainGreen rounded-full hover:bg-mainGreen/80 text-white p-3 px-6 mt-8 font-medium text-lg border-white border-[1px]'>Donate now</button>
            </div>
        </section>
    )
}

export default Hero
