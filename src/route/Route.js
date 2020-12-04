import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from "../containers/HomeContainer";
import {NAVIGATION_CONSTANTS} from "../common/Constants";
import FoodContainer from "../containers/FoodContainer";
import ToppingContainer from "../containers/ToppingContainer";

const Stack = createStackNavigator();
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
