import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import {Achievements} from './pages/Achievements';
import Mision from './pages/Mision';
// Encabezado y pie del rediseño (los anteriores quedan en components/UI por si hay que volver).
import Footer from "./propuesta/Footer";
import Header from "./propuesta/Header";
import "./propuesta/veb.css";
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
  if (esAdmin) return children;
  // Los estilos del rediseño solo aplican dentro de .veb (el panel queda igual).
  return (
    <div className="veb">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
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
