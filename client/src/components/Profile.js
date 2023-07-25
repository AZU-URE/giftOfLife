import React, { useEffect, useState } from 'react'
import useConnect from '../hook/useConnect'

const Profile = ({ userType }) => {
    const { account, contract } = useConnect();
    const [address, setAddress] = useState(null);
    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        let users
        const handleUser = async () => {
            setAddress(account?.signer?.address)
            // console.log("i m here 1");

            if (userType === 'doctors') {
                users = await contract.getDoctors()
            } else if (userType === 'donor') {
                users = await contract.getDonors()
            }
            else if (userType === 'patients') {
                console.log("patient");
                users = await contract.getReceivers()
            }

            // const temp = await users.filter((user) => { return user[0] === address })
            // console.log(temp[0]);
            setUser(users.find((user) => { return user[0] == address }))
            // setUser(users)
        }
        // console.log(address);
        // const
        // setUser()
        handleUser()
        // console.log(user);

    }, [user])

    const handleDonote = () => {
        if (userType === 'donor') {
            console.log("clicked");
        } else {
            setMessage("You can't donate")
        }
    }
    const handleMatch = () => {
        if (userType === 'patients' || userType === 'doner') {
            console.log("clicked");

        } else {
            setMessage("You can't find the match")
        }
    }
    const handleVerify = () => {
        if (userType === 'doctors') {
            console.log("clicked");

        } else {
            setMessage("You can't verify, you are not a doctor")
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen space-y-24'>
            <p className='text-4xl font-bold text-mainGreen'>Your Profile</p>
            <div className='flex space-y-10 flex-col items-center'>

                {
                    user &&
                    <div>
                        <span className='text-orange-500 text-xl mr-10'>Address:</span> {user[0]}
                        <br />
                        <span className='text-orange-500 text-xl mr-10'>Name:</span>  {user[1]}
                    </div>
                }
                <div className='flex space-x-5'>
                    <button onClick={handleDonote} className='px-5 py-2 text-white text-xl bg-mainGreen rounded-lg'>Donate</button>
                    <button onClick={handleMatch} className='px-5 py-2 text-white text-xl bg-mainGreen rounded-lg'>Find Match</button>
                    <button onClick={handleVerify} className='px-5 py-2 text-white text-xl bg-mainGreen rounded-lg'>Verify</button>
                </div>

            </div>
            <p className='text-red-500 mt-24'>{message}</p>
        </div>
    )
}

export default Profile