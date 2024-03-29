import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appointment from "../pages/Appointment";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import Profile from "../pages/Profile";
import NewAppointment from "../pages/NewAppointment";
import Contact from "../pages/Contact";

const AppRoutes = (props) => (
    <BrowserRouter>
        <NavbarComponent cookie={props.cookies} removeCookie={props.removeCookie}/>
        <Routes>
            <Route path="/" element={<Home cookie={props.cookies} />} />
            <Route path="/login" element={<Login setCookie={props.setCookie} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment cookie={props.cookies} />} />
            <Route path="/profile" element={<Profile cookie={props.cookies} />} />
            <Route path="/newAppointment" element={<NewAppointment cookie={props.cookies}/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterComponent />
    </BrowserRouter>
);

export default AppRoutes;
