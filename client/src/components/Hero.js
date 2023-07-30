import React, { useState } from 'react'
import landingPageBanner from '../assets/landingPage/mainBanner2.jpg'
import useConnect from '../hook/useConnect'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const { account, contract } = useConnect()
    const navigate = useNavigate()
    const [message, setMessage] = useState('')

    const handleClick = async (e) => {
        const address = account?.signer?.address
        if (account?.signer) {
            if (e.target.id === 'donor') {
                console.log("hii");
                const donors = await contract.getDonors()
                const found = donors.filter((user) => {
                    return user[0] === address
                })
                // console.log(found);
                if (found.length !== 0) {
                    navigate(`/donors/${address}`)
                } else {
                    navigate('/register/donor')
                }
            } else if (e.target.id === 'receiver') {
                console.log("receiver");
                const receivers = await contract.getReceivers()
                const found = receivers.filter((user) => {
                    return user[0] === address
                })
                // console.log(found);
                if (found.length !== 0) {
                    navigate(`/patients/${address}`)
                } else {
                    navigate('/register/receiver')
                }
            } else if (e.target.id === 'doc') {
                console.log("doc");
                const docs = await contract.getDoctors()
                const found = docs.filter((user) => {
                    return user[0] === address
                })
                // console.log(found);
                if (found.length !== 0) {
                    navigate(`/doctors/${address}`)
                } else {
                    navigate('/register/doctor')
                }

            }
            // navigate('/register/donor')
        } else {
            setMessage("Your metamask is not connected")
            setTimeout(() => {
                setMessage('')
            }, 3000)
        }
    }

    // const handleReceive = () => { }
    return (
        <section className='w-full h-[100vh] overflow-hidden flex bg-slate-500'>
            <div className='w-full bg-black'>
                <img src={landingPageBanner} className='-z-10 opacity-50' alt='banner_image' />
            </div>
            <div className='w-full absolute m-auto top-64 flex flex-col items-center'>
                <p className='text-7xl text-mainGreen font-dmSans font-bold'>Happiness <span className='text-white'>comes from</span> </p>
                <p className='text-7xl text-mainGreen font-dmSans font-bold'><span className='text-white'>your</span>  action.</p>
                <p className='text-base text-white font-dmSans font-light mt-8'>Donate and track your Organs and organ doners here</p>
                <div className="flex space-x-5">
                    <button id='donor' onClick={(event) => { handleClick(event) }} className='bg-mainGreen rounded-full hover:bg-mainGreen/80 text-white p-3 px-6 mt-8 font-medium text-lg border-white border-[1px]'>Donate</button>
                    <button id='receiver' onClick={(event) => { handleClick(event) }} className='bg-transparent hover:bg-mainGreen/80 rounded-full hover:text-white border-[2px] border-mainGreen text-mainGreen p-3 px-6 mt-8 font-medium text-lg'>Receive</button>
                    <button id='doc' onClick={(event) => { handleClick(event) }} className='bg-mainGreen rounded-full hover:bg-mainGreen/80 text-white p-3 px-6 mt-8 font-medium text-lg border-white border-[1px]'>Verify</button>


                </div>
                {message && <p className='flex items-center justify-centerfixed font-bold p-3 m-20 bg-slate-500/50 text-xl text-mainGreen rounded-lg text-center '>{message}</p>}
            </div>
        </section>
    )
}

export default Hero
