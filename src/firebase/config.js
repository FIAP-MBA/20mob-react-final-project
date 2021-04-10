import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBahqr88ijSG0ZkTJ7HQldkZTYVHtk9qpY",
  authDomain: "mob-react-20mob.firebaseapp.com",
  projectId: "mob-react-20mob",
  storageBucket: "mob-react-20mob.appspot.com",
  messagingSenderId: "32625391928",
  appId: "1:32625391928:web:92e5787457404ad1b629cd"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire ;