import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from "../containers/HomeContainer";
import {NAVIGATION_CONSTANTS} from "../common/Constants";
import FoodContainer from "../containers/FoodContainer";
import ToppingContainer from "../containers/ToppingContainer";
import {useSelector} from "react-redux";
import FoodDetail from "../containers/FoodDetail";

const Stack = createStackNavigator();
export default function Route() {
  const {contact} = useSelector(state => state.auth.contact);
  const UserScreens = () => {
    return <>
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.HOME}
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.DETAIL}
        component={FoodContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.TOPPING}
        component={ToppingContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.CART}
        component={ToppingContainer}
        options={{
          headerShown: false,
        }}
      />
    </>
  }
  const WelcomeScreens = () => {
    return <>
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.HOME}
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.DETAIL}
        component={FoodContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.TOPPING}
        component={ToppingContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.CART}
        component={ToppingContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.FOOD}
        component={FoodDetail}
        options={{
          headerShown: false,
        }}
      />
    </>
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          contact ? UserScreens() : WelcomeScreens()
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
