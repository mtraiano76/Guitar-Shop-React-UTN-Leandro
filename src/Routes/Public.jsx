import HomePage from '../Pages/HomePage'
import RegistroPage from '../Pages/RegistroPage'
import LoginPage from '../Pages/LoginPage'
import {
  Routes,
  Route
} from "react-router-dom"
import DetallePage from '../Pages/DetallePage';
import NotFound from '../Pages/NotFound';
function Public() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/alta' element={<RegistroPage />} />
        <Route path='/ingresar' element={<LoginPage />} />
        <Route path='/producto/:id' element={<DetallePage />}  />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default Public;
