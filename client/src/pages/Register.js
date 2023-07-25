import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import { useParams } from 'react-router-dom'
import RegisterFormDoc from '../components/forms/RegisterFormDoc'

const Register = () => {
    const params = useParams()
    return (
        <div className='flex items-center justify-center bg-mixingGreen/20 min-h-screen w-full'>
            {
                params.user === 'doctor'
                    ?
                    <RegisterFormDoc />
                    :
                    <RegisterForm />
            }
        </div>
    )
}

export default Register
