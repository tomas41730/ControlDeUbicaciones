import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDelLn2boUPz7jGQOaDbKekRQBuTewpsoI",
    authDomain: "chachas-70327.firebaseapp.com",
    databaseURL: "https://chachas-70327.firebaseio.com",
    projectId: "chachas-70327",
    storageBucket: "chachas-70327.appspot.com",
    messagingSenderId: "762124770443",
    appId: "1:762124770443:web:db3dc8e275a44850"
}

const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()