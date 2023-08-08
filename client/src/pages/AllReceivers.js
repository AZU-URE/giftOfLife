import useConnect from '../hook/useConnect'
import React, { useEffect, useState } from 'react'
import List from '../components/donors/List'
// import ReceiverCard from '../components/receivers/ReceiverCard'

const AllReceivers = () => {
	const { contract, account } = useConnect()
	const [receivers, setReceivers] = useState([])
	const [verifiedReceivers, setVerifiedReceivers] = useState([])
	const [verify, setVerify] = useState(false)
	const [error, setError] = useState('')
	const [errorVerfiy, setErrorVerfiy] = useState('')

	useEffect(() => {
		const getReceivers = async () => {
			console.log(account?.signer?.address)
			const receivers = await contract.getReceivers();
			// console.log(receivers.length);
			if (receivers.length == 0) {
				setError("Receivers not found");
			} else {
				setReceivers(receivers);
				// console.log(receivers[0][4]);
			}
		}

		const getVerifiedReceivers = async () => {
			const receivers = await contract.getVerifiedReceivers();
			if (receivers.length === 0) {
				setErrorVerfiy("No verified Receivers");
			} else {
				setErrorVerfiy(' ')
				setVerifiedReceivers(receivers);
				// console.log(donors[0][4]);
			}
		}

		contract && getReceivers()
		contract && getVerifiedReceivers()
	}, [contract, verify])

	const handleVerify = () => {
		setVerify(true);
	}

	const handleAll = () => {
		setVerify(false);
	}
	return (
		<section className='p-10 px-24 pt-28 pb-20 bg-teal-50/70 min-h-screen'>
			<div className='flex items-center justify-center space-x-5 mb-10 text-xl'>
				<button className={`p-5 rounded-md ${verify ? "bg-mainGreen" : "bg-slate-400"} text-white font-bold`} onClick={handleVerify}>Verified Receivers</button>
				<button className={`px-10 py-5 rounded-md ${verify ? "bg-slate-400" : "bg-mainGreen"} text-white font-bold`} onClick={handleAll}>Non-Verified Receivers</button>
			</div>
			<div className='bg-mainGreen/20 p-10 rounded-md '>
				{
					verify
						?
						<div>
							<p className='w-full text-center text-4xl font-dmSans font-bold mb-16'>Our<span className='text-mainGreen'> Verified Receivers</span></p>
							<List list={verifiedReceivers} error={errorVerfiy} flag={false}></List>
						</div>
						:
						<div>
							<p className='w-full text-center text-4xl font-dmSans font-bold mb-16'>All<span className='text-mainGreen'> Non-Verified  Receivers</span></p>
							<List list={receivers} error={error} flag={false}></List>
						</div>

				}			</div>
		</section>
	)
}

export default AllReceivers
