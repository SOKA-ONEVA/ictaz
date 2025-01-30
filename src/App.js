import './App.css';
import Layout from './Components/Layout';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Registration from './Pages/Registration';
import Contact from './Pages/Contact';
import Executives from './Pages/Executives';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/executives' element={<Executives />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
