import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './pages/About';
import Error from './pages/Error';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Housing from './pages/Housing';
import reportWebVitals from './reportWebVitals';
import './style/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                {/* Route dynamique pour aller sur une page specifique. */}
                <Route path="/housing/:houseId" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
