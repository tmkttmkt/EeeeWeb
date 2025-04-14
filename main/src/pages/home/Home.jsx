import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate をインポート
import "./Home.css";

const Home = () => {
    const navigate = useNavigate(); // ページ遷移用のフック

    const goToMusic = () => {
        navigate("/music"); // music ページへ遷移
    };

    const goToProgram = () => {
        navigate("/program"); // program ページへ遷移
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
            <div className="button-container">
                <button className="navigate-button" onClick={goToMusic}>
                    Music ページへ
                </button>
                <button className="navigate-button" onClick={goToProgram}>
                    Program ページへ
                </button>
            </div>
        </div>
    );
};

export default Home;