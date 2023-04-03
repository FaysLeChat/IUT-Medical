import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavbarComponent from "../components/NavbarComponent";

const NotFound = () => {
    return (
        <div className="App">
            <header>
                <NavbarComponent />
            </header>

            <main>
                <div className="error404">
                    <h1>Erreur 404</h1>
                    <p>La page que vous recherchez est introuvable.</p>
                </div>
            </main>
        </div>
    );
};

export default NotFound;