import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Cart from '../components/Cart';
import Home from '../components/Home';
import Login from '../components/Login';
import Medicine from '../components/Medicine';
import NavbarCollapse from '../components/NavbarCollapse';


function RedirectRoutes() {
    return (
        <BrowserRouter>
            <NavbarCollapse />
            <Routes>
                <Route index exact element={<Login />} />
                <Route path='/home' exact element={<Home />} />
                <Route path='/medicine' exact element={<Medicine />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/cart' exact element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RedirectRoutes;