import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from '../src/Component/Mainpage.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;