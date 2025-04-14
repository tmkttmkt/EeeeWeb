import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { database } from "../../firebase"; // Realtime Database をインポート
import { ref, set } from "firebase/database"; // データベース操作用の関数をインポート
import "./Login.css";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountName, setAccountName] = useState(""); // アカウント名の状態を追加
    const [error, setError] = useState("");
    const [isSignUp, setIsSignUp] = useState(false); // ログインとサインアップを切り替えるフラグ
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("ログイン成功！");
            navigate("/");
        } catch (err) {
            setError("ログインに失敗しました: " + err.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Realtime Database にユーザー情報を保存
            await set(ref(database, `users/${user.uid}`), {
                accountName: accountName, // アカウント名を保存
                role: "general", // ロールを "一般" に設定
            });

            alert("新規登録成功！");
            navigate("/");
        } catch (err) {
            setError("新規登録に失敗しました: " + err.message);
        }
    };

    const toggleSignUp = () => {
        setError("");
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="login-container">
            <h1>{isSignUp ? "新規登録" : "ログイン"}</h1>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
                {isSignUp && (
                    <input
                        type="text"
                        placeholder="アカウント名"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                    />
                )}
                <input
                    type="email"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{isSignUp ? "新規登録" : "ログイン"}</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p>
                {isSignUp ? "既にアカウントをお持ちですか？" : "アカウントをお持ちでないですか？"}{" "}
                <button onClick={toggleSignUp}>
                    {isSignUp ? "ログイン" : "新規登録"}
                </button>
            </p>
        </div>
    );
};

export default Login;