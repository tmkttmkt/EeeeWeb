import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Realtime Database をインポート

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

console.log("Firebase API Key:", firebaseConfig.apiKey);
console.log("Firebase Auth Domain:", firebaseConfig.authDomain);
console.log("Firebase Database URL:", firebaseConfig.databaseURL);
console.log("Firebase Project ID:", firebaseConfig.projectId);
console.log("Firebase Storage Bucket:", firebaseConfig.storageBucket);
console.log("Firebase Messaging Sender ID:", firebaseConfig.messagingSenderId);
console.log("Firebase App ID:", firebaseConfig.appId);

// Firebase アプリを初期化
const app = initializeApp(firebaseConfig);

// Firebase Authentication をエクスポート
export const auth = getAuth(app);

// Firebase Realtime Database をエクスポート
export const database = getDatabase(app);