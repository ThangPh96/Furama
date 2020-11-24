import React from 'react';
import {StyleSheet} from 'react-native'
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";
import FuramaImage from "../common/FuramaImage";
import Images from "../../common/Images";


const FoodHeader = () => {
    return (
      <FuramaView
        style={{
          height: Dimens.verticalScale(80),
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FuramaImage
          localSource={Images.im_back}
          style={{
            width: Dimens.widthScreen / 15,
            height: Dimens.widthScreen / 15,
            position: "absolute",
            left: 10,
            top: 15,
          }}
        />
        <FuramaView>
          <FuramaText
            text={"Đồ ăn & thức uống"}
            style={[
              { fontSize: FontSizes.size45, fontWeight: "bold" },
              styles.txtView,
            ]}
          />
        </FuramaView>
        <FuramaView style={styles.imView}>
          <FuramaImage
            localSource={Images.im_cart}
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
    imView:{
        position: 'absolute',
        right: 10,
        top: 15,        
    }
})

export default FoodHeader;
