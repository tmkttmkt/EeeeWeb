import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Music from "./pages/music/Music";
import Login from "./pages/login/Login";
import Program from "./pages/program/Program";
import Account from "./pages/account/Account";
import AccountTab from "./components/AccountTab"; // アカウントタブコンポーネントをインポート

function App() {
    return (
        <Router>
            <AccountTab />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path="/login" element={<Login />} />
                <Route path="/program" element={<Program />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;