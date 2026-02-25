import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Locations } from './pages/Locations';
import { About } from './pages/About';
import { Furnace } from './pages/services/Furnace';
import { MiniSplits } from './pages/services/MiniSplits';
import { HeatPump } from './pages/services/HeatPump';
import { AirConditioner } from './pages/services/AirConditioner';
import { Boiler } from './pages/services/Boiler';
import { WaterHeaters } from './pages/services/WaterHeaters';
import { NewtonLocation } from './pages/locations/Newton';
import { CountyLocation } from './pages/locations/CountyLocation';
import { CityLocation } from './pages/locations/CityLocation';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { MassSave } from './pages/MassSave';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-800 font-sans">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/services/furnace" element={<Furnace />} />
            <Route path="/services/mini-splits" element={<MiniSplits />} />
            <Route path="/services/heat-pump" element={<HeatPump />} />
            <Route path="/services/ac" element={<AirConditioner />} />
            <Route path="/services/boiler" element={<Boiler />} />
            <Route path="/services/water-heaters" element={<WaterHeaters />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations/newton" element={<NewtonLocation />} />
            <Route path="/locations/city/:cityName" element={<CityLocation />} />
            <Route path="/locations/:county" element={<CountyLocation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mass-save" element={<MassSave />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;