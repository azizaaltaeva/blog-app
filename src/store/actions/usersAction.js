import { auth } from "../../firebase";
import { userLoginError, userLoginLoading, userLoginSuccess, userLogoutError, userLogoutLoading, userLogoutSuccess, usersRegisterError, usersRegisterLoading, usersRegisterSucces } from "../reducers/userReducer"
import { 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';

// export const registerUser = (email, password, displayName) => (dispatch) => {
//   dispatch(usersRegisterLoading());
//   auth
//     .createUserWithEmailAndPassword(auth, email, password)
//     .then(({ user }) => {
//       user.updateProfile({
//         displayName,
//       })
//       dispatch(usersRegisterSucces(user));
//     })
//     .catch((error) => dispatch(usersRegisterError(error.message)))
// }

export const registerUser = (email, password) => async (dispatch) => {
  dispatch(usersRegisterLoading());
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    dispatch(usersRegisterSucces(user))
  } catch (error) {
    dispatch(usersRegisterError(error.message));
  }
}

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(userLoginLoading());
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user, 'login user')
    dispatch(userLoginSuccess(user))
  } catch (e) {
    dispatch(userLoginError(e.message))
  }
}

export const logoutUser = () => async (dispatch) => {
  dispatch(userLogoutLoading());
  try {
    const user = await signOut(auth)
    console.log(user, 'logout user')
    dispatch(userLogoutSuccess())
  } catch (e) {
    dispatch(userLogoutError(e.message))
  }
}
