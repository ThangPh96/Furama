import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from "../containers/HomeContainer";
import {NAVIGATION_CONSTANTS} from "../common/Constants";
import FoodContainer from "../containers/FoodContainer";
import FoodContainer2 from "../containers/FoodContainer2";
import FoodContainer3 from "../containers/FoodContainer3";
import NewFoodContainer from "../containers/FoodContainer1";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginContainer from "../containers/LoginContainer";

function HomeStackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION_CONSTANTS.HOME}
    >

      <Stack.Screen
        name={NAVIGATION_CONSTANTS.HOME}
        component={HomeContainer}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.DETAIL}
        component={FoodContainer}
        options={{
          headerShown: true,
          headerTitle: 'Do an thuc uong'.toUpperCase(),
          headerStyle: {
            backgroundColor: 'orange'
          },
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.DETAIL2}
        component={FoodContainer2}
        options={{
          headerShown: true,
          headerTitle: 'Do an thuc uong'.toUpperCase(),
          headerStyle: {
            backgroundColor: 'orange'
          },
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.DETAIL3}
        component={FoodContainer3}
        options={{
          headerShown: true,
          headerTitle: 'Do an thuc uong'.toUpperCase(),
          headerStyle: {
            backgroundColor: 'orange'
          },
        }}
      />
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.LOGIN}
        component={NewFoodContainer}
        options={{
          headerShown: true,
          headerTitle: 'Do an thuc uong'.toUpperCase(),
          headerStyle: {
            backgroundColor: 'orange'
          },
        }}
      />

    </Stack.Navigator>
  )
}
function UserNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator}/>
      <Tab.Screen name="Settings" component={FoodContainer}/>
      <Tab.Screen name="Home1" component={HomeStackNavigator}/>
      <Tab.Screen name="Settings1" component={FoodContainer}/>
    </Tab.Navigator>
  )
}

export default function Route(props) {
  // const {
  //   isLogin
  // } = props;

  const isLogin = true
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NAVIGATION_CONSTANTS.LOGIN}
      >
        {!isLogin ? <Stack.Screen
          name={NAVIGATION_CONSTANTS.LOGIN}
          component={LoginContainer}
          options={{
            headerShown: false,
          }}
        /> :
        <Stack.Screen
          name={NAVIGATION_CONSTANTS.HOME}
          component={UserNavigator}
          options={{
            headerShown: false,
          }}
        />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
