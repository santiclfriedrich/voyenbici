import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import {Achievements} from './pages/Achievements';
import Mision from './pages/Mision';
import Footer from "./components/UI/Footer";
import Header from './components/UI/Header';
import Equipo from "./pages/Equipo";

import "./App.css";
import Involvement from "./pages/Involvement";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// El panel de contenido no usa el header ni el footer del sitio publico.
function Layout({ children }) {
  const esAdmin = useLocation().pathname.startsWith('/admin');
  return (
    <>
      {!esAdmin && <Header />}
      {children}
      {!esAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
      <Routes>
        <Route index path="*" element={<Home/>} />
        <Route path={'/mision'} element={<Mision/>} />
        <Route path='/logros' element={<Achievements/>} />
        <Route path='/involucrate' element={<Involvement/>} />
        <Route path='/equipo' element={<Equipo/>} />
        {/* No va en el nav: se llega solo desde el cartel del inicio. */}
        <Route path='/proyectos' element={<Projects/>} />
        {/* Panel de contenido. No va en el nav; lo protege el login del servidor. */}
        <Route path='/admin' element={<Admin/>} />

      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
