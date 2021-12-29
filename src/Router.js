
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/:id" element={<ServiceDetail />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Router;
