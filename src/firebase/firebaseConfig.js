import firebase from 'firebase/app';
import 'firebase/storage';

  const config = {
    apiKey: "AIzaSyD8LY3rjL2bB5r41jOhcU22CG3IBaJXKLE",
    authDomain: "gallery-x.firebaseapp.com",
    databaseURL: "https://gallery-x.firebaseio.com",
    projectId: "gallery-x",
    storageBucket: "gallery-x.appspot.com",
    messagingSenderId: "1082592632295"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }
