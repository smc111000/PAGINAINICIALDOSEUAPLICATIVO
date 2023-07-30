import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAu5IQahgPb_YXbjhN48nzh6H7V1o84puE",
  authDomain: "bilbiotecaeletronica123.firebaseapp.com",
  projectId: "bilbiotecaeletronica123",
  storageBucket: "bilbiotecaeletronica123.appspot.com",
  messagingSenderId: "680102591857",
  appId: "1:680102591857:web:c03575ebe2bb17fbf5cad0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
