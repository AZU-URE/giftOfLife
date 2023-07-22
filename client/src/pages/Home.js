import Hero from '../components/Hero'
import About from '../components/About'
import Receivers from '../components/receivers/Receivers'
import Doctors from '../components/doctors/Doctors'
import AllDonors from '../components/donors/Donors'
import Footer from '../components/Footer'

const Home = ({ aboutRef, ReceiversRef, DoctorRef }) => {

    return (
        <div>
            <Hero />
            <Receivers ReceiversRef={ReceiversRef} />
            <About aboutRef={aboutRef} />
            <Doctors DoctorRef={DoctorRef} />
			<AllDonors />
            <Footer />
        </div>
    )
}

export default Home
