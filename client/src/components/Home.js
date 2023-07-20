import React, { useRef } from 'react'
import Hero from './Hero'
import About from './About'
import Receivers from './Receivers'
import Doctors from './Doctors'
import Footer from './Footer'

const Home = ({ aboutRef, ReceiversRef, DoctorRef }) => {

    return (
        <div>
            <Hero />
            <Receivers ReceiversRef={ReceiversRef} />
            <About aboutRef={aboutRef} />
            <Doctors DoctorRef={DoctorRef} />
            <Footer />
        </div>
    )
}

export default Home
