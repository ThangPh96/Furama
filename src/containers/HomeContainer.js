import React from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import TypeServiceList from "../components/home/TypeServiceList";
import TypeNewsList from "../components/home/TypeNewsList";
import Images from "../common/Images";
import {ScrollView} from 'react-native'
import FuramaView from "../components/common/FuramaView";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const HomeContainer = (props) => {
    const {
        navigation
    } = props;
  const Tab = createMaterialTopTabNavigator();

  const HomeComponent = () => {
    return (
      <FuramaContainer
          style={{}}
          renderContentView={() => {
              return (
                  <>
                      <FuramaView style={{justifyContent:'center',alignItems:'center',flex:1}}>
                      <TypeServiceList
                          navigation={navigation}
                      />
                      </FuramaView>
                      <FuramaView style={{justifyContent:'flex-end',flex:1}}>
                          <TypeNewsList/>
                      </FuramaView>
                  </>
              )
          }}
      />
    )
  }

  const Home2 = () => {
    return <FuramaView/>
  }
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home 1" component={HomeComponent} />
        <Tab.Screen name="Home 2" component={Home2} />
      </Tab.Navigator>
    );
};


export default HomeContainer;
