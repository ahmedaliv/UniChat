import firebase from 'firebase/app'
import 'firebase/auth'
import  'firebase/app'
export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyC8VWc5AATAdCUFdr-QFk9yJBbkWPsAQsQ",
    authDomain: "unichat-6f789.firebaseapp.com",
    projectId: "unichat-6f789",
    storageBucket: "unichat-6f789.appspot.com",
    messagingSenderId: "458235865867",
    appId: "1:458235865867:web:f494de7e02b58fc58ad00e"
  }).auth();