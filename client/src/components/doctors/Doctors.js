import React from 'react'
import DoctorCard from './DoctorCard'
import { useNavigate } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import doctors from '../../assets/landingPage/doctors.png'

const Doctors = ({ DoctorRef }) => {
    const navigate = useNavigate();
    const viewAllDoctors = () => {
        navigate('/doctors')
    }
    return (
        <section ref={DoctorRef} id="Doctors" className='p-10 px-24 pt-20 bg-teal-50/70'>
            <p className='w-full text-center text-4xl font-dmSans font-medium mb-16'><span className='text-mainGreen'>Our</span>  Doctors</p>
            <div className='flex items-center justify-around '>
                {/* <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard /> */}
                <p className='w-full text-xl italic text-green-900'>
                    In the realm where science meets grace,<br />
                    Doctors gift life's second embrace.<br />
                    With skillful hands and hearts so kind,<br />
                    They're the keepers of the precious <span className='font-bold'>gift of life</span> .<br />
                </p>
                <img src={doctors} alt='doctors' className='w-full' />
            </div>
            <div className=' flex items-center '>
                <button className='bg-mainGreen rounded-full hover:bg-teal-800 text-white p-4 mt-8 font-medium text-lg border-white border-[1px] mx-auto flex items-center space-x-4' onClick={viewAllDoctors}> <p>Check Out Doctors</p> <BsFillArrowRightCircleFill style={{ fontSize: "24px", style: "bold" }} className='' /> </button>
            </div>
        </section>
    )
}

export default Doctors
