import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import ContactPage from './pages/ContactPage';
import './App.css'; // Ensure global styles are imported

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-gray-100 font-sans selection:bg-primary selection:text-black relative">
        <CustomCursor />
        <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-50"></div>
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
