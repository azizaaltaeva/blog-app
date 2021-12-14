// import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyARYUkQeShEIDEFm88W6RHFqSLEAzFDu8Q",
  authDomain: "individual-hackthon.firebaseapp.com",
  projectId: "individual-hackthon",
  storageBucket: "individual-hackthon.appspot.com",
  messagingSenderId: "492472288297",
  appId: "1:492472288297:web:5e0243147748d55300c838"
})

export const auth = getAuth(firebaseApp);

// export const firestore = getFirestore(firebaseApp);