import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCj1bos46JrGNp6fhHRsHiCRe7ZnYcpCiE",
  authDomain: "disney-clone-ae31d.firebaseapp.com",
  projectId: "disney-clone-ae31d",
  storageBucket: "disney-clone-ae31d.appspot.com",
  messagingSenderId: "264892501635",
  appId: "1:264892501635:web:8711fc20a2e41dd82a95b6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
