import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Charities from './components/Charities'
import CelebDonation from './components/CelebDonation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App h-full w-full">
      {/* <p className='text-red-400'>hiiiii app</p> */}
      <Navbar />
      <Hero />
      <div className=''>

        <About />
        <Charities />
        <CelebDonation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
