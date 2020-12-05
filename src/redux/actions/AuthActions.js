import {AUTH_ACTIONS} from "../../common/Constants";

const setAuthData = (data) => ({
  type: AUTH_ACTIONS.SET_AUTH_DATA,
  data: data,
});

export {
  setAuthData,
}
