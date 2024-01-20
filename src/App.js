import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from '../src/Component/Mainpage.jsx'
import Suratfarm from './Component/Suratfarm.jsx';
import Premimumvilla from './Component/Premimumvilla.jsx';
import Highvilla from './Component/Highvilla.jsx';
import Mediumvilla from './Component/Mediumvilla.jsx';
import Ahemedabad from './Component/Ahemedabad.jsx';
import Lonaval from './Component/Lonaval.jsx';
import AdajanDandi from './Component/AdajanDandi.jsx';
import Mahabaleshwar from './Component/Mahabaleshwar.jsx';
import Navsari from './Component/Navsari.jsx';
import Rajasthan from './Component/Rajasthan.jsx';
import Saputara from './Component/Saputara.jsx';
import Wada from './Component/Wada.jsx';
import Surat from './Component/Surat.jsx';
import Kamrej from './Component/Kamrej.jsx';
import Palsana from './Component/Palsana.jsx';
import SayanOlpad from './Component/SayanOlpad.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/suratfarm" element={<Suratfarm />} />
          <Route path="/premiumvilla" element={<Premimumvilla />} />
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
      </BrowserRouter>
    </>
  );
}

export default App;