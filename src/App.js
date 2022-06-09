import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer"

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import ProductosPage from './pages/ProductosPage';
import RegistroPage from './pages/RegistroPage';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='productos' element={<ProductosPage />} />
          <Route path='galeria' element={<GaleriaPage />} />
          <Route path='contacto' element={<ContactoPage />} />
          <Route path='registro' element={<RegistroPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

export default App;
