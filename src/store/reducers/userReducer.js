import { 
  LOGIN_ERROR, 
  LOGIN_LOADING, 
  LOGIN_SUCCESS, 
  LOGOUT_ERROR, 
  LOGOUT_LOADING, 
  LOGOUT_SUCCESS, 
  USER_REGISTER_ERROR, 
  USER_REGISTER_LOADING, 
  USER_REGISTER_SUCCESS } from "../consts";

const initialState = {
  loading: false,
  currentUser: null, 
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_LOADING:
      return { ...state, loading: true };

    case USER_REGISTER_SUCCESS: 
      return { ...state, loading: false, currentUser: action.payload, error: null }

    case USER_REGISTER_ERROR:
      return { ...state, loading: false, currentUser: null, error: action.payload }

    case LOGIN_LOADING:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload, error: null }

    case LOGIN_ERROR:
      return { ...state, loading: false, currentUser: null, error: action.payload }

    case LOGOUT_LOADING:
      return { ...state, loading: true };
  
    case LOGOUT_SUCCESS:
      return { ...state, loading: false, currentUser: null }
  
    case LOGOUT_ERROR:
      return { ...state, loading: false, currentUser: null, error: action.payload }

    default:
      return state;
  }
}


export const usersRegisterLoading = () => ({ type: USER_REGISTER_LOADING });

export const usersRegisterSucces = (user) => ({ type: USER_REGISTER_SUCCESS, payload: user });

export const usersRegisterError = (msg) => ({ type: USER_REGISTER_ERROR, payload: msg});


export const userLoginLoading = () => ({ type: LOGIN_LOADING });

export const userLoginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

export const userLoginError = (msg) => ({ type: LOGIN_ERROR, payload: msg });


export const userLogoutLoading = () => ({ type: LOGOUT_LOADING });

export const userLogoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export const userLogoutError = (msg) => ({ type: LOGOUT_ERROR, payload: msg });