
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route exact={true} path ="/" element={<App/>} />
                <Route exact={true} path ="/login" element={<Login/>} />
                <Route exact={true} path ="/register" element={<Register/>} />
            </Routes>
        </>
    );
}

export default NavBar;
