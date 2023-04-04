import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appointment from "../pages/Appointment";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const AppRoutes = (props) => (
    <BrowserRouter>
        <NavbarComponent cookie={props.cookies} removeCookie={props.removeCookie}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setCookie={props.setCookie} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterComponent />
    </BrowserRouter>
);

export default AppRoutes;
