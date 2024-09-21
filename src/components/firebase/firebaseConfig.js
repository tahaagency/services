import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE80P-HevNxdEzhDmFuz_4_fyDUMWzcSk",
  authDomain: "blogging-2f301.firebaseapp.com",
  projectId: "blogging-2f301",
  storageBucket: "blogging-2f301.appspot.com",
  messagingSenderId: "48578611016",
  appId: "1:48578611016:web:d953462934adc277ce557d",
  measurementId: "G-ZN6E50KRFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Google Analytics
const analytics = getAnalytics(app);

// Export the app and analytics
export { app, analytics };
