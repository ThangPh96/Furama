import React, {} from 'react'
import FuramaView from "../common/FuramaView";
import FuramaImage from "../common/FuramaImage";
import Images from "../../common/Images";
import Dimens from "../../common/Dimens";
import FuramaLinearGradient from "../common/FuramaLinearGradient";
import FuramaText from "../common/FuramaText";
import {StyleSheet} from "react-native";
import FontSizes from "../../common/FontSizes";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import {NAVIGATION_CONSTANTS} from "../../common/Constants";

const FoodItems = (props,) => {
    const {item,navigation} = props;
    //console.log('item.price_list.list_price', item.price_list.list_price)
    const onPress=()=>{
        navigation?.navigate(NAVIGATION_CONSTANTS.TOPPING)

    }
    return (
        <FuramaTouchableOpacity
            style={styles.itemList}
            onPress={onPress}
        >
            <FuramaImage
                // uri={item.thumbnail}
                localSource={Images.im_welcome}
                style={{
                    width: Dimens.scale(200),
                    height: Dimens.scale(130),
                    borderRadius: Dimens.scale(8),

                }}
            >
                <FuramaLinearGradient/>
            </FuramaImage>
            <FuramaView style={{alignItems: 'center'}}>
                <FuramaText
                    numberOfLines={2}
                    style={styles.txtName}
                    text={item.item_name}
                />
                <FuramaText
                    style={styles.txtPrice}
                    text={item.price_list.list_price + ' đ'}
                />
            </FuramaView>
        </FuramaTouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemList: {
        marginHorizontal: Dimens.scale(8),
        marginVertical: Dimens.verticalScale(8),
        borderRadius: Dimens.scale(8),
    },
    txtPrice: {
        position: 'absolute',
        top: Dimens.scale(-28),
        fontSize: FontSizes.size30,
        fontWeight: 'bold',
    },
    txtName: {
        width: Dimens.scale(200),
        fontSize: FontSizes.size35,
    },

})
export default FoodItems
