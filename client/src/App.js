import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Charities from './components/Charities'
import CelebDonation from './components/CelebDonation'
import Footer from './components/Footer'
import { useRef } from 'react';

function App() {

  const aboutRef = useRef(null)
  const CharitiesRef = useRef(null)
  const CelebRef = useRef(null)
  return (
    <div className="h-full w-full ">
      {/* <p className='text-red-400'>hiiiii app</p> */}
      <Navbar CharitiesRef={CharitiesRef} aboutRef={aboutRef} CelebRef={CelebRef} />
      <Hero />
      <Charities CharitiesRef={CharitiesRef} />
      <About aboutRef={aboutRef} />
      <CelebDonation CelebRef={CelebRef} />
      <Footer />

    </div>
  );
}

export default App;
