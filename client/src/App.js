import './App.css';
import { useRef } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import AllDoctors from './components/allDoctors/AllDoctors'
import DoctorDetails from './components/allDoctors/DoctorDetails'
import AllDonors from './components/allDonors/AllDonors'
import DonorDetails from './components/allDonors/DonorDetail'
import AllReceivers from './components/allReceivers/AllReceivers'
import ReceiverDetail from './components/allReceivers/ReceiverDetail'


function App() {

  const aboutRef = useRef(null)
  const ReceiversRef = useRef(null)
  const DoctorRef = useRef(null)

  return (
    <BrowserRouter>
      <Navbar ReceiversRef={ReceiversRef} aboutRef={aboutRef} DoctorRef={DoctorRef} />
      <div className="h-full w-full ">
        <Routes>
          <Route path='/' exact element={<Home ReceiversRef={ReceiversRef} aboutRef={aboutRef} DoctorRef={DoctorRef} />} />
          <Route path='/allDoctors' exact element={<AllDoctors />} />
          <Route path='/allPatients' exact element={<AllReceivers />} />
          <Route path='/allDonors' exact element={<AllDonors />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
