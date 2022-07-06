import HomePage from '../Pages/HomePage'
import RegistroPage from '../Pages/RegistroPage'
import LoginPage from '../Pages/LoginPage'
import {
  Routes,
  Route
} from "react-router-dom"
import DetallePage from '../Pages/DetallePage';
import NotFound from '../Pages/NotFound';
import ProductosAlta from '../Pages/ProductosAlta';
import ProductosModificar from '../Pages/ProductosModificar';
function Public() {
  return (
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/alta' element={<RegistroPage />} />
        <Route path='/ingresar' element={<LoginPage />} />
        <Route path='/productos/alta' element={<ProductosAlta />}  />
        <Route path='/productos/modificar/:id' element={<ProductosModificar />}  />
        <Route path='/producto/:id' element={<DetallePage />}  />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default Public;
