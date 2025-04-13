import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Music from "./pages/music/Music";
import Login from "./pages/login/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/music" element={<Music />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;