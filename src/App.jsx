import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="gradient-bg"></div>
      <Navbar /><SocialLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App