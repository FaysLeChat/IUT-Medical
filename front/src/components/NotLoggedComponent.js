import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function NotLoggedComponent() {
    return (
        <>
            <div className="App">
                <main>
                    <div className="error404">
                        <h1>Accès non autorisé</h1>
                        <p>Tu dois te connecter pour accéder à cette page !</p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default NotLoggedComponent;
