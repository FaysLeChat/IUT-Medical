import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const NotFound = () => {
    return (
        <div className="App">
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