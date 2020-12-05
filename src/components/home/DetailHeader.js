import React from 'react';
import {StyleSheet} from 'react-native'
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";
import FuramaImage from "../common/FuramaImage";
import Images from "../../common/Images";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import { NAVIGATION_CONSTANTS } from '../../common/Constants';


const DetailHeader = (props) => {
  const {navigation, headerData} = props
  return (
    <FuramaView
      style={{
        height: Dimens.verticalScale(64),
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <FuramaTouchableOpacity
        style={{
          width: Dimens.scale(30),
          height: Dimens.scale(30),
          position: "absolute",
          left: Dimens.scale(10),
          top: Dimens.scale(10),
        }}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <FuramaImage
          localSource={Images.im_back}
          style={{
            flex: 1
          }}
        />
      </FuramaTouchableOpacity>
        <FuramaText
          text={headerData.title}
          style={[{
              fontSize: FontSizes.size36, 
              fontWeight: "bold",
              width: Dimens.widthScreen * 0.75,                      
                },
            styles.txtView,
          ]}
        />
      <FuramaTouchableOpacity 
            style={styles.imView}
            onPress={() => navigation.navigate(NAVIGATION_CONSTANTS.ORDER)}
            >
        <FuramaImage
          localSource={headerData.rightIcon}
          style={{
            width: Dimens.widthScreen / 15,
            height: Dimens.widthScreen / 15,
          }}
        />
      </FuramaTouchableOpacity>
    </FuramaView>
  );
};
const styles = StyleSheet.create({
  txtView: {
    textAlign: 'center',
    marginTop: Dimens.scale(10),
  },
  imView: {
    position: 'absolute',
    right: Dimens.scale(10),
    top: Dimens.scale(15),
  }
})

export default DetailHeader;
