import React, {useEffect} from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import TypeServiceList from "../components/home/TypeServiceList";
import TypeNewsList from "../components/home/TypeNewsList";
import Dimens from "../common/Dimens";
import { HEADER_MODE, NAVIGATION_CONSTANTS } from "../common/Constants";


const HomeContainer = (props) => {
  const {navigation} = props;


  return (
    <FuramaContainer
      style={{}}
      headerData={{
        headerMode: HEADER_MODE.HOME,
        hasHeader: true
      }}
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
