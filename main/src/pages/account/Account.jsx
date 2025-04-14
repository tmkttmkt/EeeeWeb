import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate("/login"); // ログインしていない場合はログインページにリダイレクト
            }
        });

        return () => unsubscribe(); // クリーンアップ
    }, [navigate]);

    const handleLogout = async () => {
        await signOut(auth);
        alert("ログアウトしました！");
        navigate("/login");
    };

    return (
        <div className="account-container">
            <h1>アカウント情報</h1>
            {user ? (
                <div className="account-info">
                    <p><strong>メールアドレス:</strong> {user.email}</p>
                    <button className="logout-button" onClick={handleLogout}>
                        ログアウト
                    </button>
                </div>
            ) : (
                <p>読み込み中...</p>
            )}
        </div>
    );
};

export default Account;