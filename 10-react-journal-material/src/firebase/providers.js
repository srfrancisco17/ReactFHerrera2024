import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
  try {

    const result = await signInWithPopup(FirebaseAuth,googleProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    const {displayName, email, photoURL, uid} = result.user;
  
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {

    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  
  }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {

  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid, photoURL} = resp.user;
  
    await updateProfile(FirebaseAuth.currentUser, {
      displayName
    });

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const loginWithEmailPassword = async({email, password}) => {

  //singInWithEmailAndPassword

  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid, displayName} = resp.user;

    console.log(resp);
    console.log(resp.user);
    

    return {
      ok: true,
      uid, email, displayName
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }

}