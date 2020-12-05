import {createReducer, updateObject} from "../ReduxUtils";
import {APP_ACTIONS, AUTH_ACTIONS, FOOD_ACTIONS} from "../../common/Constants";

const initialState = {
  cartData: []
}

function setCartData(state, payload) {
  const newState = updateObject(state, {
    cartData: payload.data,
  });
  return newState;
}

const handles = {};
handles[FOOD_ACTIONS.SET_CART_DATA] = setCartData;

const FoodReducer = createReducer(initialState, handles);
export default FoodReducer;
