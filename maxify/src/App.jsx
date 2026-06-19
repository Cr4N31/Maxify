import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./page/Home"
import Support from "./page/Support"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import WhatsAppFAB from "./components/ui/WhatsAppFAB"

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      once: true,     // Whether animation should happen only once while scrolling
    });
  }, []);
  
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppFAB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App