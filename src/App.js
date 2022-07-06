import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Components/layout/Header";
import Menu from "./Components/layout/Menu";
import Footer from "./Components/layout/Footer"


import HomePage from './Pages/HomePage';
import ContactoPage from './Pages/ContactoPage';
import GaleriaPage from './Pages/GaleriaPage';
import ProductosPage from './Pages/ProductosPage';
import RegistroPage from './Pages/RegistroPage';
import LoginPage from './Pages/LoginPage';
import ProductosAlta from './Pages/ProductosAlta';
import DetallePage from './Pages/DetallePage';
import ProductosModificar from './Pages/ProductosModificar';


function App() {
  return (
    <div className="App">
      <Header />
     
      <BrowserRouter>
        <Menu />
        <Routes>
   
          <Route path='home' element={<HomePage />} />
          <Route path='productos' element={<ProductosPage />} />
          <Route path='galeria' element={<GaleriaPage />} />
          <Route path='contacto' element={<ContactoPage />} />
          <Route path='/producto/:id' element={<DetallePage />} />
          <Route path='registro' element={<RegistroPage />} />
          <Route path='ingresar' element={<LoginPage />} />
          <Route path='productos/alta' element={<ProductosAlta />} />
          <Route path='productos/modificar' element={<ProductosModificar />} />
          
        </Routes>
      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

export default App;
