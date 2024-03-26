import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//
import 'firebase/compat/database'

let firebaseConfig = {

    apiKey: "AIzaSyDG5JPHhMvsfgwvuV0f0bbaZWklrX8JudI",
  
    authDomain: "mixingbd-4b711.firebaseapp.com",
  
    projectId: "mixingbd-4b711",
  
    storageBucket: "mixingbd-4b711.appspot.com",
  
    messagingSenderId: "449403707380",
  
    appId: "1:449403707380:web:64250d24b78c2d0439a3a1"
  
  };
  

//verifica se uma instância do firebase está aberta
if (!firebase.apps.length) {
    //initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
