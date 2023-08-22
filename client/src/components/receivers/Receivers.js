import React from 'react'
import ReceiverCard from './ReceiverCard'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import patient from '../../assets/landingPage/patient.png'

const Receivers = ({ ReceiversRef }) => {
    const navigate = useNavigate();
    const viewAllPatients = () => {
        navigate('/patients');
    }

    return (
        <section ref={ReceiversRef} id="Receivers" className='p-10 px-24 pt-20 bg-teal-50'>
            <p className=' w-full text-center text-4xl font-dmSans font-medium'>Happy<span className='text-mainGreen'> Patients</span></p>
            <div className='flex items-center justify-around '>
                {/* <ReceiverCard />
                <ReceiverCard />
                <ReceiverCard />
                <ReceiverCard />
                <ReceiverCard /> */}
                <p className='w-full text-xl spacing text-green-900 italic'>
                    In the hushed chambers of the hospital's embrace,<br />
                    Patients in need, a portrait of grace.<br />
                    Their spirits ablaze, their hearts in strife,<br />
                    Awaiting the <span className='font-bold'>gift of life</span> , the essence of life.<br />

                    In their journey's silence, courage takes flight,<br />
                    Patience, their armor, in the darkest of night.<br />
                    Your choice to bestow this gift, pure and rife,<br />
                    Reshapes their destiny, infusing hope into life.<br />
                </p>
                <img src={patient} alt='patient' className='w-full' />
            </div>
            <div className=' flex items-center '>
                <button className='bg-mainGreen rounded-full hover:bg-teal-800 text-white p-4 mt-8 font-medium text-lg border-white border-[1px] mx-auto flex items-center space-x-4' onClick={viewAllPatients}> <p className='text-center'>Check Out Patients</p> <BsFillArrowRightCircleFill style={{ fontSize: "24px", style: "bold" }} className='' /> </button>
            </div>
        </section>
    )
}

export default Receivers
