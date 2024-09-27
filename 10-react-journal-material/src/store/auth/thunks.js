import { singInWithGoogle } from "../../firebase/providers";
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