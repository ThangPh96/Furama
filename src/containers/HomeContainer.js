import React from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import TypeServiceList from "../components/home/TypeServiceList";
import TypeNewsList from "../components/home/TypeNewsList";
import Images from "../common/Images";
import {ScrollView} from 'react-native'
import FuramaView from "../components/common/FuramaView";
import Dimens from "../common/Dimens";

const HomeContainer = (props) => {
  const {navigation} = props;



  return (
    <FuramaContainer
      style={{}}
      renderContentView={() => {
        return (
          <>
            <TypeServiceList
              style={{
                marginBottom: Dimens.verticalScale(20),
                marginTop: Dimens.verticalScale(8)
              }}
              navigation={navigation}
            />
            <TypeNewsList/>
          </>
        );
      }}
    />
  );
};


export default HomeContainer;
