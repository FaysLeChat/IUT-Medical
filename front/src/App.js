import React from 'react';
import AppRoutes from './routes';
import {useCookies} from "react-cookie";

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["fullmedicalalchemist"]);

    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
};

export default App;
