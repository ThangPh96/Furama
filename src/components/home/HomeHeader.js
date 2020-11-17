import React from 'react';
import {StyleSheet} from 'react-native'
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";
import FuramaImage from "../common/FuramaImage";
import Images from "../../common/Images";


const HomeHeader = () => {
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
                <FuramaImage localSource={Images.im_notification}
                             style={{width: Dimens.widthScreen / 15, height: Dimens.widthScreen / 15}}/>
                <FuramaImage localSource={Images.im_notification}
                             style={{width: Dimens.widthScreen / 15, height: Dimens.widthScreen / 15}}/>
            </FuramaView>
        </FuramaView>
    );
};
const styles = StyleSheet.create({
    txtView: {
        color: 'white'
    },
    imView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin:5,
        flexDirection:'row'
    }
})

export default HomeHeader;
