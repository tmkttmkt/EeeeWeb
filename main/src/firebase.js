import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASWo5sU6-PeP7JHAN2CQqiBdwpYkTQ2B0",
    authDomain: "eeee-web-0.firebaseapp.com",
    projectId: "eeee-web-0",
    storageBucket: "eeee-web-0.firebasestorage.app",
    messagingSenderId: "115136857753",
    appId: "1:115136857753:web:1c8fb1a9bd46af8b18da08"
  };

// Firebase アプリを初期化
const app = initializeApp(firebaseConfig);

// Firebase Authentication をエクスポート
export const auth = getAuth(app);