import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import {Achievements} from './pages/Achievements';
import Mision from './pages/Mision';
import Footer from "./components/UI/Footer";
import Header from './components/UI/Header';
import Donation from "./pages/Donation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="*" element={<Home/>} />
        <Route path={'/mision'} element={<Mision/>} />
        <Route path='/logros' element={<Achievements/>} />
        <Route path='/dona' element={<Donation/>} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
