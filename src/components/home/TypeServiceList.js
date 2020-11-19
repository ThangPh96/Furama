import React, {useState} from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import Dimens from "../../common/Dimens";
import FuramaFlatList from "../common/FuramaFlatList";
import FontSizes from "../../common/FontSizes";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import {NAVIGATION_CONSTANTS} from "../../common/Constants";
import Images from "../../common/Images";

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
]

const TypeServiceList = (props) => {
    const {
        navigation
    } = props;
    return (
        <FuramaFlatList
            numColumns={3}
            data={DataItemType}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
                <FuramaTouchableOpacity
                    style={styles.itemType}
                    onPress={() => console.log(item)}
                >
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={styles.imView}
                            source={item.image}/>
                        <Text style={{margin: 5, fontWeight: 'bold', fontSize: FontSizes.size20,}}>
                            {item.title}
                        </Text>
                    </View>
                </FuramaTouchableOpacity>
            }
        />
    )
}

const styles = StyleSheet.create({
    itemType: {
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 20,
        width: Dimens.scale(100),
        height: Dimens.scale(100),
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
    }
})

export default TypeServiceList;
