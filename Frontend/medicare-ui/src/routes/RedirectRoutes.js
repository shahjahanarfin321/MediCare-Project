import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from '../components/About';
import AdminLogin from '../components/AdminLogin';
import Appointment from '../components/Appointment';
import AppointmentList from '../components/AppointmentList';
import Cart from '../components/Cart';
import CreateDoctorAppointment from '../components/CreateDoctorAppointment';
import CreateMedicine from '../components/CreateMedicine';
import DoctorAppointment from '../components/DoctorAppointment';
import HealthCareTest from '../components/HealthCareTest';
import HealthConcerns from '../components/HealthConcerns';
import HealthLibrary from '../components/HealthLibrary';
import Home from '../components/Home';
import Login from '../components/Login';
import ManageProductPage from '../components/ManageProductPage';
import Medicine from '../components/Medicine';
import NavbarCollapse from '../components/NavbarCollapse';
import Register from '../components/Register';
import UpdateMedicine from '../components/UpdateMedicine';


function RedirectRoutes() {
    return (
        <BrowserRouter>
            <NavbarCollapse />
            <Routes>
                <Route index exact element={<Home />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/admin-login' exact element={<AdminLogin />} />
                <Route path='/register' exact element={<Register />} />
                <Route path='/medicine' exact element={<Medicine />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/cart' exact element={<Cart />} />      
                <Route path='/appointment' exact element={<Appointment />} /> 
                <Route path='/test' exact element={<HealthCareTest />} /> 
                <Route path='/healthlibrary' exact element={<HealthLibrary />} /> 
                <Route path='/healthconcerns' exact element={<HealthConcerns />} />
                <Route path='/manageproduct' exact element={<ManageProductPage />}/>
                <Route path='/updatemedicine/:id' exact element={<UpdateMedicine />}/>
                <Route path='/createmedicine' exact element={<CreateMedicine />}/>
                <Route path='/appointmentList' exact element={<AppointmentList />}/>
                <Route path='/doctorappointment' exact element={<DoctorAppointment />}/>
                <Route path='/createdoctorappointment' exact element={<CreateDoctorAppointment />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default RedirectRoutes;