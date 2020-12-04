import React, {} from 'react'
import {StyleSheet} from 'react-native'
import FuramaTextInput from "../common/FuramaTextInput";
import FuramaView from "../common/FuramaView";
import FuramaImage from "../common/FuramaImage";
import Images from "../../common/Images";
import Dimens from "../../common/Dimens";

function Note(props) {
    const {text} = props;
    return (
        <FuramaView
            flexDirection={'row'}
            style={styles.containerNote}>
            <FuramaImage
                tintColor={'#dcdcdc'}
                style={styles.imNote}
                localSource={Images.im_note}/>
            <FuramaTextInput
                placeholder={'Ghi chú'}
                style={styles.inputNote}
            >

            </FuramaTextInput>
        </FuramaView>
    )
}

const styles = StyleSheet.create({
    inputNote: {},
    containerNote: {
        backgroundColor: 'white',
        width: Dimens.widthScreen - Dimens.scale(40),
        alignItems: 'center',
        borderRadius:Dimens.scale(10),
        paddingHorizontal:Dimens.scale(10)
    },
    imNote: {
        height: Dimens.scale(20),
        width: Dimens.scale(20)
    },
});
export default Note
