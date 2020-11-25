import React, {useState} from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import Dimens from "../../common/Dimens";
import FuramaFlatList from "../common/FuramaFlatList";
import FontSizes from "../../common/FontSizes";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import {NAVIGATION_CONSTANTS} from "../../common/Constants";
import Images from "../../common/Images";
import FuramaView from '../common/FuramaView';
import FuramaText from '../common/FuramaText';

const DataItemType = [
    {
        id: 1,
        title: "Furama Restaurant-Don Cipriani's food 1",
        image: Images.im_food
    },

    {
        id: 2,
        title: "Furama Restaurant-Don Cipriani's food 2",
        image: Images.im_topping_1
    },
    {
        id: 3,
        title: "Furama Restaurant-Don Cipriani's food 3",
        image: Images.im_topping_2
    },
    {
        id: 4,
        title: "Furama Restaurant-Don Cipriani's food 4",
        image: Images.im_food
    },
    {
        id: 5,
        title: "Furama Restaurant-Don Cipriani's food 5",
        image: Images.im_topping_1
    },
    {
        id: 6,
        title: "Furama Restaurant-Don Cipriani's food 6",
        image: Images.im_topping_2
    },    
]

const FoodList = (props) => {
    const {
        navigation
    } = props;
    return (
        <FuramaView
        style={{
            width: Dimens.widthScreen,
            height: Dimens.heightScreen / 2.5,
        }}>
        <FuramaText
        style={{ margin: 10, 
            color:'white', 
            fontWeight: 'bold', 
            fontSize: FontSizes.size38,}}
        text={'Sea Foods'}
        />
        <FuramaFlatList
            scrollEnabled={false}
            numColumns={3}
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
                        <Text style={{  margin: 5, 
                                        color:'white', 
                                        fontWeight: 'bold', 
                                        textAlign: 'center', 
                                        fontSize: FontSizes.size20,}}>
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
        margin: 5,
        width: Dimens.scale(110),
        height: Dimens.scale(80),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imView: {
        width: Dimens.scale(80),
        height: Dimens.scale(50),
        borderRadius: 15,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
})

export default FoodList;
