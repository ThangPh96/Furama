import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import ButtonAmount from "./ButtonAmount";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import FuramaImage from "../common/FuramaImage";
import FuramaText from "../common/FuramaText";
import Dimens from "../../common/Dimens";
import FuramaView from "../common/FuramaView";
import FontSizes from "../../common/FontSizes";
import Note from "./Note";

function SelectionToppingItem(props) {

  const [result, setResult] = useState(0)
  const onPressPlus = () => {
    setResult(result + 1)
    console.log(result)
  }
  const onPressMinus = () => {
    if (result > 0) setResult(result - 1)
  }

  return (
    <FuramaView
      style={{
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Dimens.widthScreen
      }}
    >
      <Note style={{alignItems: 'center', marginVertical: Dimens.verticalScale(20)}}/>
      <FuramaView
        style={[styles.container, {
          flexDirection: 'row',
        }]}
      >
        <FuramaView style={{alignItems: 'center',}}>
          <FuramaText
            style={{fontSize: FontSizes.size35, bottom: Dimens.scale(10)}}
            text={'Số lượng'}/>
          <FuramaView style={{alignItems: 'center', flexDirection: 'row'}}>
            <ButtonAmount
              onPress={onPressPlus}
              text={'+'}
            />
            <FuramaText
              style={{fontSize: FontSizes.size50, marginHorizontal: Dimens.scale(10)}}
              text={result}/>
            <ButtonAmount
              onPress={onPressMinus}
              text={'-'}
            />
          </FuramaView>
        </FuramaView>
        <FuramaTouchableOpacity style={styles.btnFinish}>
          <FuramaText
            style={{color: "#056055"}}
            text={'Money'}/>
          <FuramaText
            style={{color: "#056055"}}
            text={'Chọn món'}/>
        </FuramaTouchableOpacity>
      </FuramaView>
    </FuramaView>
  )
}

const styles = StyleSheet.create({
  btnFinish: {
    flexDirection: 'row',
    height: Dimens.verticalScale(30),
    width: Dimens.scale(188),
    backgroundColor: '#CDDFDD',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Dimens.scale(8),
    padding: Dimens.scale(5)

  },
  container: {
    flex: 1,
    margin: Dimens.scale(5),
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
export default SelectionToppingItem
