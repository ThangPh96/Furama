import React from 'react';
import FuramaContainerFoods from "../components/common/FuramaContainerFoods";
import FoodList from "../components/home/FoodList";
import BeerList from "../components/home/BeerList";
import Images from "../common/Images";
import {ScrollView} from 'react-native'
import FuramaView from "../components/common/FuramaView";

const FoodContainer = (props) => {
  const { navigation } = props;
  return (
    <FuramaContainerFoods
      style={{}}
      renderContentView={() => {
        return (
          <>
            <FuramaView
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <FoodList navigation={navigation} />
            </FuramaView>
            <FuramaView style={{ justifyContent: "flex-end", flex: 1 }}>
              <BeerList/>
            </FuramaView>
          </>
        );
      }}
    />
  );
};


export default FoodContainer;
