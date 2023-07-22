import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
import Home from './pages/Home';
import AllDoctors from './pages/AllDoctors'
import DoctorDetails from './pages/DoctorDetails'
import AllReceivers from './pages/AllReceivers'
import ReceiverDetail from './pages/ReceiverDetail'
import Register from './pages/Register';

import './App.css';
import Navbar from './components/Navbar';


function App() {
  const aboutRef = useRef(null)
  const ReceiversRef = useRef(null)
  const DoctorRef = useRef(null)

  return (<>
	<Navbar ReceiversRef={ReceiversRef} aboutRef={aboutRef} DoctorRef={DoctorRef}/>
    <Routes>
      <Route path='/' exact element={<Home ReceiversRef={ReceiversRef} aboutRef={aboutRef} DoctorRef={DoctorRef} />} />
      <Route path='/register' exact element={<Register />} />
      <Route path='/doctors' exact element={<AllDoctors />} />
      <Route path='/doctors/:id' exact element={<DoctorDetails />} />
      <Route path='/patients' exact element={<AllReceivers />} />
      <Route path='/patients/:id' exact element={<ReceiverDetail />} />
    </Routes>
  </>
  );
}

export default App;
