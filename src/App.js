import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './my-sass.scss'
import Layout from './containers/Layout/Layout';
import Home from './pages/Home';
import Accommodation from './pages/Accomodation/Accomodation';
import About from './pages/About';
import Error from './pages/Error';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/accomodation/:id" element={<Accommodation />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}