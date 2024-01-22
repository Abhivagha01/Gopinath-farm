import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Premimumvilla from './Component/Premimumvilla.js';
import Highvilla from './Component/Highvilla.js';
import Ahemedabad from './Component/Ahemedabad.js';
import Lonaval from './Component/Lonaval.js';
import AdajanDandi from './Component/AdajanDandi.js';
import Mahabaleshwar from './Component/Mahabaleshwar.js';
import Navsari from './Component/Navsari.js';
import Rajasthan from './Component/Rajasthan.js';
import Saputara from './Component/Saputara.js';
import Wada from './Component/Wada.js';
import Surat from './Component/Surat.js';
import Kamrej from './Component/Kamrej.js';
import Palsana from './Component/Palsana.js';
import SayanOlpad from './Component/SayanOlpad.js';
import Home from './Component/Home.js';
import Header from './Global/Header.js';
import Footer from './Global/Footer.js';
import Mediumvilla from './Component/Mediumvilla.js';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}




function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main-wrapper">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/premiumvilla" element={<Premimumvilla />} />
            <Route path="/mediumvilla" element={<Mediumvilla />} />
            <Route path="/highvilla" element={<Highvilla />} />
            <Route path="/ahemedabad" element={< Ahemedabad />} />
            <Route path="/lonavala" element={< Lonaval />} />
            <Route path="/adajandandi" element={<AdajanDandi />} />
            <Route path="/mahabaleswar" element={<Mahabaleshwar />} />
            <Route path="/navsari" element={< Navsari />} />
            <Route path="/rajasthan" element={<Rajasthan />} />
            <Route path="/saputara" element={<Saputara />} />
            <Route path="/wada" element={< Wada />} />
            <Route path="/surat" element={<Surat />} />
            <Route path="/kamrej" element={<Kamrej />} />
            <Route path="/palsana" element={< Palsana />} />
            <Route path="/sayanolpad" element={<SayanOlpad />} />

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;