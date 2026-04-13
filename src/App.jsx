import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import {Achievements} from './pages/Achievements';
import Mision from './pages/Mision';
import Footer from "./components/UI/Footer";
import Header from './components/UI/Header';
import Donation from "./pages/Donation";
import Equipo from "./pages/Equipo";

import "./App.css";
import Involvement from "./pages/Involvement";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index path="*" element={<Home/>} />
        <Route path={'/mision'} element={<Mision/>} />
        <Route path='/logros' element={<Achievements/>} />
        <Route path='/dona' element={<Donation/>} />
        <Route path='/involucrate' element={<Involvement/>} />
        <Route path='/equipo' element={<Equipo/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
