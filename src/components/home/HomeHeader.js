import React from 'react';
import FuramaView from "../common/FuramaView";
import ItemType from "./ItemType";
import {ImageBackground} from "react-native";
import FuramaText from "../common/FuramaText";
import FuramaImage from "../common/FuramaImage";
import Dimens from "../../common/Dimens";


const HomeHeader = () => {
  return (
    <FuramaView
      style={{
        height: Dimens.verticalScale(80),
        backgroundColor: 'red'
      }}
    >
      <FuramaView>
        <FuramaText text={"Hello Guys"}/>
        <FuramaText text={'Hello verybody'}/>
      </FuramaView>
      <FuramaView>
        {/*<FuramaImage*/}
        {/*localSource={Ima}/>*/}
      </FuramaView>
    </FuramaView>
  );
};

export default HomeHeader;
