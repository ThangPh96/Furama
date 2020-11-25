import React from 'react';
import {StyleSheet} from 'react-native'
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";
import FuramaImage from "../common/FuramaImage";
import Images from "../../common/Images";


const HomeHeader = () => {
<<<<<<< HEAD
    return (
        <FuramaView
            style={{
                height: Dimens.verticalScale(80),
                flexDirection: 'row'
            }}
        >
            <FuramaView style={{margin: 5,}}>
                <FuramaText text={"Xin chào Nguyễn Văn A"}
                            style={[{fontSize: FontSizes.size35, fontWeight: 'bold'},
                                styles.txtView]}/>
                <FuramaText text={'Chúc bạn có một kì nghỉ tuyệt vời'}
                            style={[styles.txtView, {marginVertical: 5}]}/>
            </FuramaView>
            <FuramaView style={styles.imView}>
                <FuramaImage
                    localSource={Images.im_time_picker}
                             style={{width: Dimens.widthScreen / 15, height: Dimens.widthScreen / 15}}/>
                <FuramaImage localSource={Images.im_notification}
                             style={{width: Dimens.widthScreen / 15, height: Dimens.widthScreen / 15}}/>
            </FuramaView>
        </FuramaView>
    );
=======
  return (
    <FuramaView
      style={{
        height: Dimens.verticalScale(64),
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <FuramaView
        style={{marginHorizontal: Dimens.scale(8)}}
      >
        <FuramaText
          text={"Xin chào Nguyễn Văn A"}
          numberOfLines={2}
          style={[
            {
              fontSize: FontSizes.size35,
              fontWeight: 'bold',
              width: Dimens.widthScreen - Dimens.scale(30 * 2 + 8 * 4),
                marginBottom: Dimens.verticalScale(4)
            },
            styles.txtView
          ]}
        />
        <FuramaText
          text={'Chúc bạn có một kì nghỉ tuyệt vời'}
          style={[styles.txtView]}
        />
      </FuramaView>
      <FuramaView
        style={styles.imView}
      >
        <FuramaImage
          localSource={Images.im_time_picker}
          style={{
              width: Dimens.verticalScale(20), height: Dimens.verticalScale(20),
          }}
        />
        <FuramaImage
          localSource={Images.im_notification}
          style={{
              width: Dimens.verticalScale(20), height: Dimens.verticalScale(20),
              marginHorizontal: Dimens.scale(8)
          }}
        />
      </FuramaView>
    </FuramaView>
  );
>>>>>>> 83bc179660ea0eee0a639d253a3ea864bf3dab46
};
const styles = StyleSheet.create({
  txtView: {
    color: 'white'
  },
  imView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 5,
    flexDirection: 'row'
  }
})

export default HomeHeader;
