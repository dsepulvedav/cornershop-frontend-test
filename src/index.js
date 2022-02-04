import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'normalize.css';
import './index.css';

import App from './App';
import { WelcomeScreen } from './pages/WelcomeScreen';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="app" element={<App />} />
        </Routes>
    </BrowserRouter>, 
    document.getElementById('root')
);
