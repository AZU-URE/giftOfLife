import React from 'react'
import CharityCard from './CharityCard'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Charities = ({ CharitiesRef }) => {
    return (
        <section ref={CharitiesRef} id="Charities" className='p-10 px-24 pt-20 bg-teal-50/70'>
            <p className='w-full text-center text-4xl font-dmSans font-medium mb-16'>Charity<span className='text-mainGreen'> Organisation</span></p>
            <div className='grid grid-cols-3 gap-6 items-center justify-around '>
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <div className=' flex items-center '>
                    <button className='bg-mainGreen rounded-full hover:bg-teal-800 text-white p-4 mt-8 font-medium text-lg border-white border-[1px] w-1/2 mx-auto flex items-center space-x-4'> <p>Check Out More</p> <BsFillArrowRightCircleFill style={{ fontSize: "24px", style: "bold" }} className='' /> </button>
                </div>
            </div>
        </section>
    )
}

export default Charities
