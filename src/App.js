import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Components/layout/Header";
import Menu from "./Components/layout/Menu";
import Footer from "./Components/layout/Footer"

import IndexPage from './Pages/IndexPage';
import HomePage from './Pages/HomePage';
import ContactoPage from './Pages/ContactoPage';
import GaleriaPage from './Pages/GaleriaPage';
import ProductosPage from './Pages/ProductosPage';
import RegistroPage from './Pages/RegistroPage';


function App() {
  return (
    <div className="App">
      <Header />
     
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='home' element={<HomePage />} />
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
