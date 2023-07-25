import React from 'react'
import Profile from '../components/Profile'

const ReceiverDetail = () => {
    return (
        <div>
            A particular patient's detail listed here
            <Profile userType='patients' />
        </div>
    )
}

export default ReceiverDetail
