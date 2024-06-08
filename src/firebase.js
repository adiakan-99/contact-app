import MyFirebase from "firebase/compat/app"
import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw9UWs2Mlh3dCGw07JM4neOPWU9PMrL8w",
  authDomain: "contacts-app-9eabe.firebaseapp.com",
  projectId: "contacts-app-9eabe",
  storageBucket: "contacts-app-9eabe.appspot.com",
  messagingSenderId: "796633372681",
  appId: "1:796633372681:web:514c4d08d0a186206140d8"
};

// Initialize Firebase
const app = MyFirebase.initializeApp(firebaseConfig);

export const db = MyFirebase.firestore() // connection will establish to firestore database