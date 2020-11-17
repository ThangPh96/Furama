import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../components/home/HomeScreen";
import {TouchableOpacity,View,Text,Image} from "react-native";

const Stack = createStackNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name='Home' component={HomeScreen}
                              options={{
                                  headerShown: false,
                              }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
