import React from 'react';
import AppRoutes from './routes';
import FooterComponent from "./components/FooterComponent";

const App = () => {
    return (
        <div className="App">
            <AppRoutes />
            <FooterComponent />
        </div>
    );
};

export default App;
