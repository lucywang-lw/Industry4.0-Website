import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Faq from './components/pages/Faq';
import Sponsors from './components/pages/Sponsors';
import Footer from './components/Footer';
import Events from './components/pages/Events';

function App() { 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path= "/initiatives" element={<Events />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
