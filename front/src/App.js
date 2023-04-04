import React from 'react';
import AppRoutes from './routes';
import {useCookies} from "react-cookie";

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["amigo"]);

    return (
        <div className="App">
            <AppRoutes setCookie={setCookie} />
        </div>
    );
};

export default App;
