import React, {useState} from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import Dimens from "../../common/Dimens";
import FuramaFlatList from "../common/FuramaFlatList";
import FontSizes from "../../common/FontSizes";


export default () => {

    return (
        <FuramaFlatList
            horizontal={true}
            data={DataItemType}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
                <View style={styles.itemType}>
                    <View>
                        <Image source={item.image}/>
                    </View>
                    <View>
                        <Text style={{margin:5,fontWeight:'bold',fontSize:FontSizes.size22}}>
                            {item.title}
                        </Text>
                    </View>
                </View>
            }
        />
    )
}
const styles = StyleSheet.create({
    itemType:{
        backgroundColor:'white',
        margin:20,
        borderRadius:20,
        width:Dimens.widthScreen/2.7,
        height:Dimens.widthScreen/2.7,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
const DataItemType = [
    {
        id: 1,
        title: 'Đặt bàn',
        image: require('../../assets/images/im_dinner/im_dinner.png')
    },
    {
        id: 2,
        title: 'Sức khỏe và Làm đẹp',
        image: require('../../assets/images/im_spa/im_spa.png')
    },
    {
        id: 3,
        title: 'Giặt ủi',
        image: require('../../assets/images/im_clothes/im_clothes.png')
    },
    {
        id: 4,
        title: 'Mini bar',
        image: require('../../assets/images/im_drink/im_drink.png')
    },
    {
        id: 5,
        title: 'Đồ ăn và thức uống',
        image: require('../../assets/images/im_serving_dish/im_serving_dish.png')
    },
]
