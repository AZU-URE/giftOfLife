import React from 'react'
import ReceiverCard from '../components/receivers/ReceiverCard'

const AllReceivers = () => {
    return (
		<section className='p-10 px-24 pt-28 pb-20 bg-teal-50/70'>
		<p className='w-full text-center text-4xl font-dmSans font-bold mb-16'>Happy<span className='text-mainGreen'> Patients</span></p>
		<div className='grid grid-cols-3 gap-6 items-center justify-around '>
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
			<ReceiverCard />
		</div>
		</section>
    )
}

export default AllReceivers
