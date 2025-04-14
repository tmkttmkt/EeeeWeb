import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSignUp, setIsSignUp] = useState(false); // ログインとサインアップを切り替えるフラグ

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("ログイン成功！");
        } catch (err) {
            setError("ログインに失敗しました: " + err.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("新規登録成功！");
        } catch (err) {
            setError("新規登録に失敗しました: " + err.message);
        }
    };

    return (
        <div>
            <h1>{isSignUp ? "新規登録" : "ログイン"}</h1>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
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
                <button onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "ログイン" : "新規登録"}
                </button>
            </p>
        </div>
    );
};

export default Login;