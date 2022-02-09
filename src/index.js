import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'normalize.css';
import './index.css';

import App from './App';
import { WelcomeScreen } from './pages/WelcomeScreen';
import { MainScreen } from './pages/MainScreen';
import { AppRoutes } from './routes/routes';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={AppRoutes.Welcome} element={<WelcomeScreen />} />
            <Route path={AppRoutes.Home} element={<MainScreen />} />
            <Route path={AppRoutes.Docs} element={<App />} />
        </Routes>
    </BrowserRouter>, 
    document.getElementById('root')
);
