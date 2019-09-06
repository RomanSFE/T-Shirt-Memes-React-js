import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCRZGOZLp36mB9svzdH70FGQdGMuwjdrgk",
    authDomain: "memes-t-shirt-react.firebaseapp.com",
    databaseURL: "https://memes-t-shirt-react.firebaseio.com",
    projectId: "memes-t-shirt-react",
    storageBucket: "memes-t-shirt-react.appspot.com",
    messagingSenderId: "813763633434",
    appId: "1:813763633434:web:dc11a01950f23ff1914ca3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }