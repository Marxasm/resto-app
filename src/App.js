import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MenuPage from './pages/Menu';

function App() {
  return (
    <div>
      <Navbar />
      <div>
    <Routes>        
      <Route path="/"  element={<HomePage/>} />
      <Route path="/About"  element={<AboutPage />}/>
      <Route path="/Menu"  element={<MenuPage/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
