// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBukWgbS8gP1OFTCzF-nK3XmnSpYHJECHs",
  authDomain: "netflix-gpt-b1851.firebaseapp.com",
  projectId: "netflix-gpt-b1851",
  storageBucket: "netflix-gpt-b1851.appspot.com",
  messagingSenderId: "7136311246",
  appId: "1:7136311246:web:f9446f1da21c226d785d9f",
  measurementId: "G-74KK0CPPPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();