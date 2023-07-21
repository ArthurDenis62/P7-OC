import React from 'react';
import ReactDOM from 'react-dom/client';
import './my-sass.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import Error from './pages/Error';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Logement" element={<Logement />} />
                    <Route path="About" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);