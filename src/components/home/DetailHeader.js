import React from 'react';
import {StyleSheet} from 'react-native'
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";
import FuramaImage from "../common/FuramaImage";
import Images from "../../common/Images";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";


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
          left: 10,
          top: 10,
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
          style={[
            {fontSize: FontSizes.size45, fontWeight: "bold"},
            styles.txtView,
          ]}
        />
      <FuramaView style={styles.imView}>
        <FuramaImage
          localSource={headerData.rightIcon}
          style={{
            width: Dimens.widthScreen / 15,
            height: Dimens.widthScreen / 15,
          }}
        />
      </FuramaView>
    </FuramaView>
  );
};
const styles = StyleSheet.create({
  txtView: {
    textAlign: 'center',
    marginTop: 10,
  },
  imView: {
    position: 'absolute',
    right: 10,
    top: 15,
  }
})

export default DetailHeader;
