import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import NavbarModal from './components/NavbarModal';
import Home from './pages/Home';



function App() {
  return (
    <div className="bg-[#F8F4F1] min-h-screen  mx-auto overflow-x-hidden">
      <Navbar />
      
        <Routes>
        <Route index path='/' element={<Home />} />
        <Route  path='/navbarModal' element={<NavbarModal />} />
        </Routes>
      
    </div>
  );
}

export default App;
