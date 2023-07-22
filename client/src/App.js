import './App.css';
import { useEffect, useRef } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import AllDoctors from './components/allDoctors/AllDoctors'
import DoctorDetails from './components/allDoctors/DoctorDetails'
import AllDonors from './components/allDonors/AllDonors'
import DonorDetails from './components/allDonors/DonorDetail'
import AllReceivers from './components/allReceivers/AllReceivers'
import ReceiverDetail from './components/allReceivers/ReceiverDetail'
import Register from './components/Register';


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
        <Route path='/register' exact element={<Register />} />
        <Route path='/doctors' exact element={<AllDoctors />} />
        <Route path='/doctors/:id' exact element={<DoctorDetails />} />
        <Route path='/patients' exact element={<AllReceivers />} />
        <Route path='/patients/:id' exact element={<ReceiverDetail />} />
        <Route path='/donors' exact element={<AllDonors />} />
        <Route path='/donors/:id' exact element={<DonorDetails />} />
      </Routes>
    </>


  );
}

export default App;

{/* <Navbar ReceiversRef={ReceiversRef} aboutRef={aboutRef} DoctorRef={DoctorRef} />
        <div className="h-full w-full "> */}
{/* </div> */ }