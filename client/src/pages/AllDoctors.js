import React from 'react'
import DoctorCard from '../components/doctors/DoctorCard'

const AllDoctors = () => {
    return (
        <section className='px-24 pt-28 pb-20 bg-teal-50/70'>
            <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'><span className='text-mainGreen'>Our</span>  Doctors</p>
            <div className='grid grid-cols-3 gap-6 items-center justify-around '>
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
				<DoctorCard />
				<DoctorCard />
				<DoctorCard />
				<DoctorCard />
				<DoctorCard />
				<DoctorCard />
				<DoctorCard />
            </div>
        </section>
    )
}

export default AllDoctors
