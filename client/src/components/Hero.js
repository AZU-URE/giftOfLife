import React from 'react'
import landingPageBanner from '../assets/landingPage/mainBanner2.jpg'

const Hero = () => {
    return (
        <section className=' w-full h-fit flex bg-slate-500'>
            <div className='w-full bg-black'>
                <img src={landingPageBanner} className='-z-10 opacity-50' />
            </div>
            <div className='w-full absolute m-auto top-64'>
                <p className='text-7xl text-mainGreen font-dmSans font-bold'>hiii</p>
            </div>
        </section>
    )
}

export default Hero
