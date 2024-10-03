import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (emai, password) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
      dispatch(checkingCredentials());

      const result = await singInWithGoogle();

      if (!result.ok) {
        dispatch(logout(result.errorMessage));
      }

      dispatch(login(result));


    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

  return async(dispatch) => {

    dispatch(checkingCredentials());

    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

    if (!ok) return dispatch(logout({errorMessage}));

    dispatch(login({uid, displayName, email, photoURL}))
    
  }

}

export const startLoginWithEmailPassword = ({email, password}) => {

  return async(dispatch) => {

    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({email, password});

    console.log(result);
    

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
    
  }

}

export const startLogout = () => {
  return async(dispatch) => {

    await logoutFirebase();

    dispatch(logout());

  }
}