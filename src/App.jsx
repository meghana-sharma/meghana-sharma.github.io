//! Styles
import './styles/styles.scss'
//? Pages
import Contact from './pages/Contact'
import General from './pages/General'
import Programs from './pages/Programs'
//? Components
import Entry from './components/Entry'
import Nav from './components/Nav'
import Footer from './components/Footer'
//* Router
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Entry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/general" element={<General />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
