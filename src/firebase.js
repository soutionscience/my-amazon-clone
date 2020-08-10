import firebase from 'firebase';
// require('firebase/auth');
//firebase.initializeApp

const firebaseApp = firebase.initializeApp({

    
        apiKey: "AIzaSyCyNe-IEND3REAwNW6l5cTSccSz3KeRUuw",
        authDomain: "my-5bbad.firebaseapp.com",
        databaseURL: "https://my-5bbad.firebaseio.com",
        projectId: "my-5bbad",
        storageBucket: "my-5bbad.appspot.com",
        messagingSenderId: "612535465492",
        appId: "1:612535465492:web:60480bedc5d771703dd901"
    

})


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export{db, auth}