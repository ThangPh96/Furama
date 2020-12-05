import React from 'react';
import {StyleSheet} from 'react-native'
import FuramaView from "./FuramaView";
import FuramaText from "./FuramaText";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";
import FuramaImage from "./FuramaImage";
import Images from "../../common/Images";
import FuramaTouchableOpacity from "./FuramaTouchableOpacity";
import {NAVIGATION_CONSTANTS} from "../../common/Constants";

const DetailHeader = (props) => {
  const {headerData} = props;
  const {navigation, title, onShowCart} = headerData || {};
  const onPress = () => {
    navigation?.goBack()
  }
  return (
    <FuramaView
      style={{
        height: Dimens.scale(64),
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
        onPress={onPress}
      >
        <FuramaImage
          localSource={Images.im_back}
          style={{
            flex: 1
          }}
        />
      </FuramaTouchableOpacity>
      <FuramaView>
        <FuramaText
          text={title}
          style={[
            {fontSize: FontSizes.size45, fontWeight: "bold"},
            styles.txtView,
          ]}
        />
      </FuramaView>
      <FuramaView style={styles.imView}>
        {onShowCart ?
          <FuramaTouchableOpacity
            onPress={() => navigation.navigate(NAVIGATION_CONSTANTS.CART)}>
            <FuramaImage
              localSource={Images.im_cart}
              style={{
                width: Dimens.widthScreen / 15,
                height: Dimens.widthScreen / 15,
              }}
            />
          </FuramaTouchableOpacity> : <></>
        }
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
