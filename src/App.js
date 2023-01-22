import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './About/About';
import Home from './Home/Home';
import Number from './Number/Number';
import Service from './Services/Service';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import Contact from './Contact Us/Contact';
import Consultancy from './Services/Consultancy/Consultancy';
import HT from './Services/Consultancy/HT/HT';
import LT from './Services/Consultancy/LT/LT';
import Execution from "./Services/Execution/Execution"
import ELV from './Services/Consultancy/ELV/ELV';
import ELV1 from './Services/Execution/ELV/ELV1';
import HT1 from './Services/Execution/HT/HT1'
import LT1 from './Services/Execution/LT/LT1'
import Footer from './Footer/Footer';
function MainPage()
{
  return <>
    <Home/>
    <About/>
    <Number/>
    <Service/>
    <Project/>
    <Contact/>
    <Footer/>
  </>
}
function App() {
  return  <Router>
  <Navbar />
  <Routes>
    <Route
      path="/"
      element={<MainPage/>}
    />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Consultancy" element={<Consultancy />} />
    <Route path="/High Tension" element={<HT/>} />
    <Route path="/High Tension (HT)" element={<HT1/>} />
    <Route path="/Low Tension" element={<LT/>} />
    <Route path="/Low Tension (LT)" element={<LT1/>} />
    <Route path="/Extra Low Voltage" element={<ELV/>} />
    <Route path="/Execution" element={<Execution/>} />
    <Route path="/Extra Low Voltage (ELV)" element={<ELV1/>} />
  </Routes>
</Router>

}

export default App;
