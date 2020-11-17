import React from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import ItemType from "../components/home/ItemType";
import ItemMarketing from "../components/home/ItemMarketing";
import Images from "../common/Images";

const HomeContainer = (props) => {
  const {
    navigation
  } = props;
  return (
    <FuramaContainer
      style={{}}
      renderContentView={() => {
        return (
          <>
            <ItemType
              navigation={navigation}
            />
            <ItemMarketing/>
          </>
        )
      }}
    />
  );
};


export default HomeContainer;
