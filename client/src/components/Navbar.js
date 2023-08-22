import React, { useEffect, useState } from 'react'
import { connect } from '../utils/connect'
import useConnect from '../hook/useConnect'
import { BiSolidUser } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/landingPage/logo.png'
const Navbar = ({ aboutRef, ReceiversRef, DoctorRef }) => {
    const navigate = useNavigate()
    const { setAccount, account, setContract } = useConnect()
    const [address, setAddress] = useState()

    const clickAbout = () => {
        navigate('/');
        aboutRef.current?.scrollIntoView({ behaviour: 'smooth' })
    }
    const clickPatients = () => {
        navigate('/');
        ReceiversRef.current?.scrollIntoView({ behaviour: 'smooth' })
    }
    const clickDoctors = () => {
        navigate('/');
        DoctorRef.current?.scrollIntoView({ behaviour: 'smooth' })
    }

    const clickDonations = () => {
        navigate('/donations');
    }

    const handleConnect = async () => {
        try {
            const { provider, contract, signer } = await connect()
            setAccount({ provider, contract, signer })
            setContract(contract)
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        console.log(account?.signer?.address);
        setAddress(account?.signer?.address);
    }, [account])


    return (
        <>
            <nav className='fixed top-0 z-20 bg-slate-400 bg-opacity-50 w-full backdrop-filter backdrop-blur-2xl'>
                <p className='text-red-500 bg-black p-1 text-center italic'>Warning: Currenly it works only on Mumbai testnet, So make sure you are on the same.</p>
                <div className='md:flex hidden justify-between font-dmSans p-4 items-center'>
                    <ul className='float-left flex space-x-4 text-white items-center'>
                        <li className='text-mainGreen cursor-pointer italic font-bold'>GiftOfLife</li>
                        {/* <img src={logo} alt='Gift Of Life' className='w-16 h-16'></img> */}
                        <li className='cursor-pointer' onClick={clickAbout}>About</li>
                        <li className='cursor-pointer' onClick={clickPatients}>Patients</li>
                        <li className='cursor-pointer' onClick={clickDoctors}>Doctors</li>
                        <li className='cursor-pointer' onClick={clickDonations}>Donations</li>
                    </ul>
                    <div className='flex space-x-3 items-center'>
                        {
                            address
                                ?
                                <div className='flex space-x-2 items-center' >
                                    <BiSolidUser style={{ fontSize: '24px' }} className='text-mainGreen bg-white rounded-full p-1'></BiSolidUser>
                                    <p className='text-white '>{address.substring(0, 6)}...{address.substring(4, -1)}</p>
                                </div>
                                :
                                <button onClick={handleConnect} className='bg-mainGreen rounded-md hover:bg-mainGreen/80 text-white p-2 px-3.5 font-medium'>Connect</button>
                        }
                        {/* <button className='bg-transparent rounded-md hover:bg-mainGreen/80 hover:text-white border-[2px] border-mainGreen text-mainGreen p-2 px-3.5 font-medium'>SignUp</button> */}
                        {/* <button className='bg-mainGreen rounded-md p-0.5 font-medium'><p className='bg-slate-800 rounded-md p-1.5 px-3 hover:text-white text-mainGreen hover:bg-mainGreen'>SignUp</p></button> */}
                    </div>
                </div>
                {/* make hamburger type resonsive navbar */}
                {/* <div className='md:hidden text-white'>
                    hambu
                </div> */}
            </nav>
        </>
    )
}

export default Navbar
