import React from 'react'
import pic from '../../assets/landingPage/celebpic/garima2.jpg'

const DonorCard = ({index}) => {
  return (
	<div className="">
		<div className="w-32 h-32 rounded-full shadow-md shadow-gray-400">
			<img src={pic} alt='profile pic' className='rounded-full object-fit' />
		</div>
		<div className="text-center">
			<p>Name</p>
			<p className='text-mainGreen'>Organ</p>
		</div>
	</div>
  )
}

export default DonorCard