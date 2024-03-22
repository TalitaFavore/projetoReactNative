import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//
import 'firebase/compat/database'

let firebaseConfig = {
    apiKey: "AIzaSyDzFA-2nhE5233JWuecDPxHQt1Pc2Y-bsA",
    authDomain: "bdmixing-1eff1.firebaseapp.com",
    projectId: "bdmixing-1eff1",
    storageBucket: "bdmixing-1eff1.appspot.com",
    messagingSenderId: "54550774914",
    appId: "1:54550774914:web:aa8ae6c218a3984b7ee09b"
};

//verifica se uma instância do firebase está aberta
if (!firebase.apps.length) {
    //initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
