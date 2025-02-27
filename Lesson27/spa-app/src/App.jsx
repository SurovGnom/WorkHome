import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";

const App = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.body.classList.toggle('dark-theme', theme === 'light');
    }
        return (
            <Router>
                    <div className="container">
                        <header className="d-flex justify-content-between  py-3">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contacts">Contacts</Link>
                                </li>
                            </ul>
                            <button className="btn btn-primary" onClick={toggleTheme}>{theme}</button>
                        </header>
                    </div>

                    <hr/>
                    <ErrorBoundary>
                        <Routes>
                            <Route exact path="/" element={<Home />}>

                            </Route>
                            <Route path="/about" element={<About />}>

                            </Route>
                            <Route path="/contacts" element={<Contacts />}>

                            </Route>
                        </Routes>
                    </ErrorBoundary>
            </Router>
        );
};

export default App;
