import {AUTH_ACTIONS, FOOD_ACTIONS} from "../../common/Constants";

const setCartData = (data) => ({
  type: FOOD_ACTIONS.SET_CART_DATA,
  data: data,
});

export {
  setCartData,
}
