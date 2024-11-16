import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; 
// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5XC8luT03PUm8-35VbstOh8TUtb1wUfE",
  authDomain: "registro-61ad5.firebaseapp.com",
  projectId: "registro-61ad5",
  storageBucket: "registro-61ad5.firebasestorage.app",
  messagingSenderId: "815995060250",
  appId: "1:815995060250:web:25a20ca8d71117f521d1a3",
  measurementId: "G-JL824WBDFD"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Analytics
const analytics = getAnalytics(app); 
export const auth = getAuth(app); 
export default app; 
export const db = getDatabase(app);
