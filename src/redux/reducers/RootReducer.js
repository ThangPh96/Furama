import {combineReducers} from 'redux'
import AppReducer from "./AppReducer";
import AuthReducer from "./AuthReducer";
import FoodReducer from "./FoodReducer";

const RootReducer = combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  food: FoodReducer
});

export default RootReducer;
