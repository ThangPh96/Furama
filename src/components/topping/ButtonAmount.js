import React, {} from 'react'
import {StyleSheet} from 'react-native'
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import FuramaText from "../common/FuramaText";
import FontSizes from "../../common/FontSizes";
import Dimens from "../../common/Dimens";

function ButtonAmount(props) {
  const {text, onPress, style} = props;
  return (
    <FuramaTouchableOpacity
      style={[styles.btnAmount, style]}
      onPress={onPress}
    >
      <FuramaText
        style={{fontSize: FontSizes.size45, color: '#056055'}}
        text={text}/>
    </FuramaTouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnAmount: {
    borderRadius: Dimens.scale(8),
    height: Dimens.scale(40),
    width: Dimens.scale(40),
    borderWidth: 1 / 2,
    backgroundColor: '#CDDFDD',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default ButtonAmount
