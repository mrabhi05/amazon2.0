  var firebaseConfig = {
    apiKey: "AIzaSyAI2M1Qj0f-2UlmGvd4saclw6a8IIzlAjg",
    authDomain: "clone2-ff671.firebaseapp.com",
    projectId: "clone2-ff671",
    storageBucket: "clone2-ff671.appspot.com",
    messagingSenderId: "809105486991",
    appId: "1:809105486991:web:7ff19d4645a66f1e956cfa",
    measurementId: "G-KT8BJMLZSS"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  admin.initializeApp(functions.config().firebase);

  var db = firebase.firestore();