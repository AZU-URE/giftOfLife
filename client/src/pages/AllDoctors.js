import React, { useEffect, useState } from 'react'
import DoctorCard from '../components/doctors/DoctorCard'
import useConnect from '../hook/useConnect'

const AllDoctors = () => {
    const { contract, account } = useConnect()
    const [doctors, setDoctors] = useState([])
    const [error, setError] = useState('')
    // console.log(contract);
    useEffect(() => {
        const getDoctors = async () => {
            console.log(account?.signer?._address)
            const doctors = await contract.getDoctors();
            console.log(doctors.length);
            if (doctors.length == 0) {
                setError("Doctors not found");
            } else {
                setDoctors(doctors);
                // console.log(doctors[0][4]);
            }
        }

        contract && getDoctors()
    }, [contract])
    return (
        <section className='px-24 pt-28 pb-20 bg-teal-50/70 min-h-screen'>
            <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'><span className='text-mainGreen'>Our</span>  Doctors</p>
            {
                doctors.map((doctor) => (
                    <div className=' m-10 p-3 bg-mainGreen/20'>
                        <p>Address: {doctor[0]}</p>
                        <p>Name: {doctor[1]}</p>
                    </div>
                ))}
            {error && <p className='text-center text-red-500 text-2xl font-bold'>{error}</p>}
        </section>
    )
}

export default AllDoctors

        // <section className='px-24 pt-28 pb-20 bg-teal-50/70'>
        //     <p className='w-full text-center text-4xl font-dmSans font-bold mb-16'><span className='text-mainGreen'>Our</span>  Doctors</p>
        //     <div className='grid grid-cols-3 gap-6 items-center justify-around '>
        //         <DoctorCard />
        //         <DoctorCard />
        //         <DoctorCard />
        //         <DoctorCard />
        //         <DoctorCard />
		// 		<DoctorCard />
		// 		<DoctorCard />
		// 		<DoctorCard />
		// 		<DoctorCard />
		// 		<DoctorCard />
		// 		<DoctorCard />
		// 		<DoctorCard />
        //     </div>
        // </section>