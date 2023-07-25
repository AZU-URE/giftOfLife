import useConnect from '../hook/useConnect'
import React, { useEffect, useState } from 'react'
// import ReceiverCard from '../components/receivers/ReceiverCard'

const AllReceivers = () => {
	const { contract, account } = useConnect()
	const [receivers, setReceivers] = useState([])
	const [error, setError] = useState('')
	useEffect(() => {
		const getReceivers = async () => {
			console.log(account?.signer?.address)
			const receivers = await contract.getReceivers();
			// console.log(receivers.length);
			if (receivers.length == 0) {
				setError("Donors not found");
			} else {
				setReceivers(receivers);
				// console.log(receivers[0][4]);
			}
		}

		contract && getReceivers()
	}, [contract])
	return (
		<section className='p-10 px-24 pt-28 pb-20 bg-teal-50/70'>
			<p className='w-full text-center text-4xl font-dmSans font-bold mb-16'>Happy<span className='text-mainGreen'> Patients</span></p>
			{
				receivers.map((receiver) => (
					<div className=' m-10 p-3 bg-mainGreen/20'>
						<p>Address: {receiver[0]}</p>
						<p>Name: {receiver[1]}</p>
						{receiver[3] === false ? <p>Donated: false</p> : <p>Donated: true</p>}
						{/* form the verified wala function */}
						{receiver[4] === false ? <p>verified: false</p> : <p>verified: true</p>}

						<p>Organ: {receiver[5].toLocaleString()}</p>
						<p>Blood Group : {receiver[6].toLocaleString()}</p>
					</div>
				))}
			{error && <p className='text-center text-red-500 text-2xl font-bold'>{error}</p>}

		</section>
	)
}

export default AllReceivers
