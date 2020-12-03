import {createReducer, updateObject} from "../ReduxUtils";
import {APP_ACTIONS} from "../../common/Constants";

const initialState = {
  loading: false
}

function showAppLoading(state, payload) {
  const newState = updateObject(state, {
    loading: payload.data,
  });
  return newState;
}

const handles = {};
handles[APP_ACTIONS.SHOW_APP_LOADING] = showAppLoading;

const AppReducer = createReducer(initialState, handles);
export default AppReducer;
