import React, { useEffect, useState } from 'react'
import useConnect from '../hook/useConnect'
import { useParams, useNavigate } from 'react-router-dom';
import getMessage from '../utils/messageInsideQuotes';

const Profile = ({ userType, found }) => {
    const { account, contract } = useConnect();
    const [address, setAddress] = useState(null);
    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')
    const [foundMessage, setFoundMessage] = useState(null);
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        let users
        const handleUser = async () => {
            // console.log(found);
            setAddress(account?.signer?.address)
            // console.log("i m here 1");

            if (userType === 'doctors') {
                users = await contract.getDoctors()
            } else if (userType === 'donor') {
                if (found === -1) {
                    users = await contract.getDonors()
                } else if (found === 1) {
                    users = await contract.getVerifiedDoners()
                    // console.log(users);
                }
            }
            else if (userType === 'patients') {
                // console.log("patient");
                if (found === -1) {
                    users = await contract.getReceivers()
                } else if (found === 1) {
                    users = await contract.getVerifiedReceivers();
                }
            }

            // const temp = await users.filter((user) => { return user[0] === address })
            // console.log(temp[0]);
            setUser(users.find((user) => { return user[0] === address }))
            // setUser(users)
        }
        // console.log(address);
        // const
        // setUser()
        handleUser()
        // console.log(user);

    }, [user])

    const handleDonote = async () => {
        if (userType === 'donor') {
            setMessage(" ")
            console.log("clicked");
            const currentUser = [
                user[0],
                user[1],
                user[2],
                user[3],
                user[4],
                user[5],
                user[6],
                user[7]];
            try {
                await contract.pair(currentUser);
                const tx = await contract.donate(currentUser)
                setMessage('donation under process');
                await tx.wait(1);
                setMessage("Donation successfully done")
                console.log(tx);

            } catch (err) {
                // console.log(err.message);
                // const message = getMessage(err);
                if (err.message.includes("You are not yet verified")) {
                    setMessage("You are not yet verified")
                } else if (err.message.includes("The receiver already received the donation from someone else!! Try again sometime later..")) {
                    setMessage("The receiver already received the donation from someone else!! Try again sometime later..")
                }

            }
        } else {
            setMessage("You can't donate")
        }
    }
    const handleMatch = async () => {
        if (userType === 'donor' || userType === 'patients') {
            setMessage(" ")
            console.log("clicked");

            const currentUser = [
                user[0],
                user[1],
                user[2],
                user[3],
                user[4],
                user[5],
                user[6],
                user[7]];

            try {


                await contract.pair(currentUser);

                const matchedProfiles = await contract.getMatchedProfiles()
                console.log(matchedProfiles);

                const filteredProfile = matchedProfiles.filter((profiles) => {
                    if (userType === 'donor') {
                        if (profiles[0][0] === user[0])
                            return profiles;
                    } else {
                        if (profiles[1][0] === user[0])
                            return profiles;
                    }
                })

                console.log(filteredProfile.length);

                if (filteredProfile.length != 0) setFoundMessage("Matches Found")
                else setFoundMessage("No Matches Found");
            } catch (error) {
                if (error.message.includes("You are not yet verified")) {
                    setMessage("You are not yet verified")
                }
            }

        } else {
            setMessage("You can't find the match")
        }
    }
    const handleVerify = async () => {
        if (userType === 'doctors') {
            setMessage(" ")
            navigate(`/doctors/${params.id}/verify`)

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
                <p className='text-2xl font-bold text-cyan-600'>{foundMessage}</p>

            </div>
            <p className='text-red-500 mt-24'>{message}</p>
        </div>
    )
}

export default Profile