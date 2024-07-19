// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaqwfKFn-O7IFuu9QYZZSviwHGrmQNYEU",
  authDomain: "netflixgpt-41cff.firebaseapp.com",
  projectId: "netflixgpt-41cff",
  storageBucket: "netflixgpt-41cff.appspot.com",
  messagingSenderId: "961678685569",
  appId: "1:961678685569:web:dc1d25ca0174361f582480",
  measurementId: "G-81CX0RYHT7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
