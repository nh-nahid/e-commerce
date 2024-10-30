import "../style/style.css";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from '../../firebase/config'
import { isUserLoggedIn } from "./utils";


if(isUserLoggedIn()){
  location.href = "./index.html"
}

const provider = new GoogleAuthProvider();

const auth = getAuth(firebaseApp);


  const loginWithGoogle = document.querySelector('#login-with-google')

  loginWithGoogle.addEventListener('click', function(){
    
signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const {displayName, email, photoURL, accessToken, uid} = result.user;
  // IdP data available using getAdditionalUserInfo(result)
  // ...
  localStorage.setItem('user', JSON.stringify({
    displayName, email, photoURL, accessToken, uid
  }))
  location.href = "/index.html"
})
.catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

  })