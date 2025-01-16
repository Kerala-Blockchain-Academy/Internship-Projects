import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import Home page
import Admin from './pages/Admin'; // Import Admin page
import Donation from './pages/Donation'; // Import Donation (Donator) page
import Receiver from './pages/Receiver'; // Import Receiver page

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home page route */}
                    <Route path="/admin" element={<Admin />} /> {/* Admin page route */}
                    <Route path="/receiver" element={<Receiver />} /> {/* Receiver page route */}
                    <Route path="/donation" element={<Donation />} /> {/* Donator page route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
