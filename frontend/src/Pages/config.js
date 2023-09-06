import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth,GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC3ql4aysfwRowg8Vz20r-OudQtwJj-fCg",
  authDomain: "movie-76fb8.firebaseapp.com",
  projectId: "movie-76fb8",
  storageBucket: "movie-76fb8.appspot.com",
  messagingSenderId: "8945295993",
  appId: "1:8945295993:web:986aff239142c61440aaa8",
  measurementId: "G-4W6F5WRCY2"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();
export {auth,provider,provider2};