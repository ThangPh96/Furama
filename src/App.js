import React from 'react';
import FuramaView from "./components/common/FuramaView";
import Route from "./route/Route";
import {NavigationContainer} from "@react-navigation/native";
import {NAVIGATION_CONSTANTS} from "./common/Constants";
import HomeContainer from "./containers/HomeContainer";
import FoodContainer from "./containers/FoodContainer";
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();
const App = () => {
  return (
    <Route/>
  );
};

export default App;
