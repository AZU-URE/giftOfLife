import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
import Home from './pages/Home';
import AllDoctors from './pages/AllDoctors'
import AllReceivers from './pages/AllReceivers'
import AllDonors from './pages/AllDonors';
import DoctorDetails from './pages/DoctorDetails'
import ReceiverDetail from './pages/ReceiverDetails'
import DonorDetails from './pages/DonorDetails'
import Register from './pages/Register';
import Error404 from './pages/Error404';

import './App.css';
import Navbar from './components/Navbar';


function App() {
  const aboutRef = useRef(null)
  const ReceiversRef = useRef(null)
  const DoctorRef = useRef(null)

  // useEffect(() => {
  //   console.log("hiiii");
  // })
  return (
    <>
      <Navbar ReceiversRef={ReceiversRef} aboutRef={aboutRef} DoctorRef={DoctorRef} />
      <Routes>
        <Route path='/' exact element={<Home ReceiversRef={ReceiversRef} aboutRef={aboutRef} DoctorRef={DoctorRef} />} />
        <Route path='/register/:user' exact element={<Register />} />
        {/* <Route path='/register/doc' exact element={<Register />} /> */}
        <Route path='/doctors' exact element={<AllDoctors />} />
        <Route path='/doctors/:id' exact element={<DoctorDetails />} />
        <Route path='/patients' exact element={<AllReceivers />} />
        <Route path='/patients/:id' exact element={<ReceiverDetail />} />
        <Route path='/donors' exact element={<AllDonors />} />
        <Route path='/donors/:id' exact element={<DonorDetails />} />
        <Route path='/*' exact element={<Error404 />} />
      </Routes>
    </>


  );
}

export default App;
