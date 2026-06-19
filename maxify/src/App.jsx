import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Support from "./page/Support"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import WhatsAppFAB from "./components/ui/WhatsAppFAB"

function App() {
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