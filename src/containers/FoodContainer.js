import React from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import TypeServiceList from "../components/home/TypeServiceList";
import TypeNewsList from "../components/home/TypeNewsList";
import Images from "../common/Images";
import FuramaText from "../components/common/FuramaText";
import TypeMenuList from "../components/home/TypeMenuList";

const FoodContainer = () => {
  return (
    <FuramaContainer
      style={{}}
      renderContentView={() => {
        return (
          <>
            <TypeMenuList/>
          </>
        )
      }}
    />
  );
};


export default FoodContainer;
