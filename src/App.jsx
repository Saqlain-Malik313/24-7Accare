import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import Aboutus from "./Pages/Aboutus";
import TopBar from "./Component/Topbar";
import Navbar from "./Component/Navbar";
import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";
import Contactus from "./Pages/Contactus";
import Ourservice from "./Pages/ourService";

function App() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/service" element={<Ourservice />} />
      </Routes>
      <Testimonial />
      <Footer/>

    </>
  );
}

export default App;
