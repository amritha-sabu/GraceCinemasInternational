import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import './App.css'
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
