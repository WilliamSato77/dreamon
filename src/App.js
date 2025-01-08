import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Courses from './components/courses/Courses.js';
import Contact from './components/contact/Contact.js';
import Coursedetails from './components/coursedetails/Coursedetails.js'; // New component
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <Nav />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coursedetails/:id" element={<Coursedetails />} /> {/* New route */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
