import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBLi_Hrmx-DUchS01kQRiOL5bB5MxUVEdc",
  authDomain: "reactjs-5f951.firebaseapp.com",
  databaseURL: "https://reactjs-5f951.firebaseio.com",
  projectId: "reactjs-5f951",
  storageBucket: "reactjs-5f951.appspot.com",
  messagingSenderId: "946591120804",
  appId: "1:946591120804:web:26ff4fa14e3bc201edd531"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase