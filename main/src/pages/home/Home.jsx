import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate(); // ページ遷移用のフック

    const goToLogin = () => {
        navigate("/login"); // ログインページへ遷移
    };

    return (
        <div className="home-container">
            <div className="project-text">
                <span className="big-p">P</span><span>roject</span>
            </div>
            <div className="big-e">E</div>
            <div className="big-e">E</div>
            <div className="big-e">E</div>
            <div className="big-e">E</div>
            <button className="login-button" onClick={goToLogin}>
                ログインページへ
            </button>
        </div>
    );
};

export default Home;