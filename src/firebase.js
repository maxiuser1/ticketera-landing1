import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-Wmk1kDgkpQ3792hZQh1-x02z_V_-olw",
  authDomain: "ticketera-ce871.firebaseapp.com",
  projectId: "ticketera-ce871",
  storageBucket: "ticketera-ce871.appspot.com",
  messagingSenderId: "34058214845",
  appId: "1:34058214845:web:73dc8798b62c80e0b5c6d4",
  measurementId: "G-71PCRM5KEK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);