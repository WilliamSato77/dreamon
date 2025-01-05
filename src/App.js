import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/nav.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Courses from './components/courses/courses.js';
import Contact from './components/contact/contact.js';

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
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
