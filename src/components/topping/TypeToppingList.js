import React, {useEffect, useState} from 'react'
import {StyleSheet} from 'react-native'
import FuramaFlatList from "../common/FuramaFlatList";
import ServiceApis from "../../services/apis/ServiceApis";
import Images from "../../common/Images";
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";
import FuramaImage from "../common/FuramaImage";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";

const data = [
    {
        id: 1,
        name: 'Sốt',
        content: [
            {
                id: 1,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 2,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 3,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 4,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 5,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
        ]
    }, {
        id: 1,
        name: 'Rau',
        content: [
            {
                id: 1,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 2,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 3,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 4,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
            {
                id: 5,
                title: 'mayonnaise',
                imageTopping: Images.im_6,
                price: 300000
            },
        ]
    }

]

function TypeToppingList(props) {
    const {navigation, item} = props
    const [topping, setTopping] = useState([])
    // useEffect(() => {
    //     ServiceApis.getSerivce(res => {
    //             setTopping(res.data.object)
    //         },
    //         err => alert('Fail'))
    // }, [])
    const renderItem = ({item}) => {
        return (
            <FuramaTouchableOpacity>
                <FuramaView style={styles.container}>
                    <FuramaImage
                        style={styles.imageTopping}
                        localSource={item.imageTopping}/>
                    <FuramaText
                        style={{ fontSize: FontSizes.size22}}
                        text={item.title}
                    />
                    <FuramaText
                        style={{fontSize: FontSizes.size20}}
                        text={item.price + ' đ'}
                    />
                </FuramaView>
            </FuramaTouchableOpacity>
        )
    }
    return (
        <>
            <FuramaImage
                style={{width: '100%', height: Dimens.scale(200)}}
                localSource={Images.im_clean_room}
            />
            <FuramaText
                style={styles.txtContainer}
                text={'Furama Resturant'}
            />
            <FuramaFlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                    <FuramaView>
                        <FuramaText
                            style={styles.txtName}
                            text={item.name}/>
                        <FuramaFlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={item.content}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                    </FuramaView>
                }
            />
            <FuramaView/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Dimens.scale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtContainer: {
        fontSize: FontSizes.size45,
        top: -50,
        left: 30
    },
    imageTopping: {
        borderRadius: Dimens.scale(50),
        height: Dimens.scale(40),
        width: Dimens.scale(40)
    },
    txtName: {
        fontSize: FontSizes.size40,
        margin: Dimens.scale(5)
    }
})
export default TypeToppingList
