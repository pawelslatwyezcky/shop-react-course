import { USER_ACTION_TYPES } from "./user.types";

const createAction = (type, payload) => ({ type, payload });

export const setCurrentUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};

export const checkUserSession = () => {
  return { type: USER_ACTION_TYPES.CHECK_USER_SESSION };
};

export const googleSignInStart = () => {
  return { type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START };
};

export const emailSignInStart = (email, password) => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: { email, password },
  };
};

export const signInSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_FAILED,
    payload: error,
  };
};

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailed = (error) => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
    payload: error,
  };
};
