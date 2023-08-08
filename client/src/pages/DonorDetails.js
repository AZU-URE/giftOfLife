import React from 'react'
import Profile from '../components/Profile'
import { useLocation } from 'react-router-dom'

const DonorDetails = () => {
    const location = useLocation()
    const found = location.state.found
    return (
        <div>
            <Profile userType='donor' found={found} />
        </div>
    )
}

export default DonorDetails
