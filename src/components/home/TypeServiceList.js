import React, {useState} from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import Dimens from "../../common/Dimens";
import FuramaFlatList from "../common/FuramaFlatList";
import FontSizes from "../../common/FontSizes";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import {NAVIGATION_CONSTANTS} from "../../common/Constants";
import Images from "../../common/Images";
import FuramaView from '../common/FuramaView';

const DataItemType = [
    {
        id: 1,
        title: 'Đồ ăn và thức uống',
        image: Images.im_serving_dish
    },

    {
        id: 2,
        title: 'Sức khỏe và Làm đẹp',
        image: Images.im_spa
    },
    {
        id: 3,
        title: 'Giặt ủi',
        image: Images.im_clothes
    },
    {
        id: 4,
        title: 'Mini bar',
        image: Images.im_drink
    },
    {
        id: 5,
        title: 'Đặt bàn',
        image: Images.im_dinner
    },
    {
        id: 6,
        title: 'Đặt lịch dọn phòng',
        image: Images.im_plunger
    },
    {
        id: 7,
        title: 'Đánh giá',
        image: Images.im_rate
    },
]

const TypeServiceList = (props) => {
    const {
        navigation
    } = props;
    return (
        <FuramaView
        style={{
            width: Dimens.widthScreen,
            height: Dimens.heightScreen / 2.5,
            justifyContent: 'center',
            alignItems:'center'           
        }}>
        <FuramaFlatList
            scrollEnabled={false}
            numColumns={4}
            data={DataItemType}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
                <FuramaTouchableOpacity
                    style={styles.itemType}
                    onPress={() => navigation?.navigate(NAVIGATION_CONSTANTS.DETAIL)}
                >
                    <View >
                        <Image
                            style={styles.imView}
                            source={item.image}/>
                        <Text style={{margin: 5, fontWeight: 'bold', textAlign: 'center', fontSize: FontSizes.size20,}}>
                            {item.title}
                        </Text>
                    </View>
                </FuramaTouchableOpacity>
            }
        />
        </FuramaView>
    )
}

const styles = StyleSheet.create({
    itemType: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 20,
        width: Dimens.scale(80),
        height: Dimens.scale(80),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imView: {
        width: Dimens.scale(40),
        height: Dimens.scale(40),
        resizeMode: 'contain',
        alignSelf: 'center',
    }
})

export default TypeServiceList;
