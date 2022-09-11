import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Help from './Components/Help';
import ContactUs from './Components/ContactUs';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import AboutUs from './Components/AboutUs';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home page */}
          <Route path='/' element={<Home />} />

          {/* Help */}
          <Route path='/help' element={<Help />} />

          {/* Contact us */}
          <Route path='/contactus' element={<ContactUs />} />

          {/* About us */}
          <Route path='/about' element={<AboutUs />} />
        </Routes>
        <Footer />



        {/* <AboutUs/> */}

        
        
        
        
        
      </BrowserRouter>
    </>
  );
}

export default App;
