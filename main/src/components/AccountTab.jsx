import React, { useEffect, useState } from "react";
import { auth, database } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./AccountTab.css";

const AccountTab = () => {
    const [user, setUser] = useState(null);
    const [accountName, setAccountName] = useState(
        sessionStorage.getItem("accountName") || "" // セッションストレージから初期値を取得
    );
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                // セッションストレージにアカウント名がない場合のみデータベースから取得
                if (!sessionStorage.getItem("accountName")) {
                    const userRef = ref(database, `users/${currentUser.uid}`);
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        const fetchedAccountName = snapshot.val().accountName || "ゲスト";
                        setAccountName(fetchedAccountName);
                        sessionStorage.setItem("accountName", fetchedAccountName); // セッションストレージに保存
                    } else {
                        setAccountName("ゲスト");
                        sessionStorage.setItem("accountName", "ゲスト");
                    }
                }
            } else {
                setUser(null);
                setAccountName("");
                sessionStorage.removeItem("accountName"); // ログアウト時にセッションストレージをクリア
            }
        });

        return () => unsubscribe(); // クリーンアップ
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        alert("ログアウトしました！");
        sessionStorage.removeItem("accountName"); // ログアウト時にセッションストレージをクリア
        navigate("/login");
    };

    const handleAccount = () => {
        navigate("/account");
    };

    return (
        <div className="account-tab">
            {user ? (
                <div className="account-info">
                    <span onClick={handleAccount} className="account-name">
                        {accountName}
                    </span>
                    <button onClick={handleLogout} className="logout-button">
                        ログアウト
                    </button>
                </div>
            ) : (
                <button onClick={() => navigate("/login")} className="login-button">
                    ログイン
                </button>
            )}
        </div>
    );
};

export default AccountTab;