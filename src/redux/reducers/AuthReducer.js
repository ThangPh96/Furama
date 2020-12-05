import {createReducer, updateObject} from "../ReduxUtils";
import {APP_ACTIONS, AUTH_ACTIONS} from "../../common/Constants";

const initialState = {
  contact: null
}

function setAuthData(state, payload) {
  const newState = updateObject(state, {
    contact: payload.data,
  });
  return newState;
}

const handles = {};
handles[AUTH_ACTIONS.SET_AUTH_DATA] = setAuthData;

const AuthReducer = createReducer(initialState, handles);
export default AuthReducer;
