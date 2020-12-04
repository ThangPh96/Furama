import React, {useState, useEffect} from 'react';
import FuramaView from "../components/common/FuramaView";
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE, NAVIGATION_CONSTANTS} from "../common/Constants";
import FuramaFlatList from "../components/common/FuramaFlatList";
import FuramaText from "../components/common/FuramaText";
import FoodApis from "../services/apis/FoodApis";
import Dimens from "../common/Dimens";
import FuramaImage from "../components/common/FuramaImage";
import Images from "../common/Images";
import {StyleSheet} from 'react-native'
import FontSizes from "../common/FontSizes";
import FuramaLinearGradient from "../components/common/FuramaLinearGradient";
import FoodItems from "../components/food/FoodItems";
import PropTypes from "prop-types";

const FoodContainer = (props) => {
    const {navigation} = props;

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        FoodApis.getFood((res) => {
            setCategories(res.data.categories)
        }, err => {
            alert('Da co loi xay ra khi get service')
        })
    }, [])

    // useEffect(() => {
    //   const onSuccess = (res) => {
    //     console.log('res.data.categories', res.data.categories)
    //     setCategories(res.data.categories)
    //   }
    //   const onErr = err => {
    //     alert('Da co loi xay ra khi get service')
    //   }
    //   FoodApis.getFood(onSuccess, onErr)
    // }, [])



    const renderItem = ({item, index}) => {
        return (
            <FuramaView>
                <FoodItems item={item[0]}
                           navigation={navigation}
                />
                {item[1] && <FoodItems
                    item={item[1]}
                    navigation={navigation}
                />}
            </FuramaView>
        )
    }

    const handleFoodItems = (items) => {
        const foodItems = [];
        let index = 0;
        for (let i = 0; i < items.length; i += 1) {
            if (foodItems[index] === undefined) {
                foodItems[index] = []
            }
            foodItems[index].push(items[i]);
            if (foodItems[index].length === 2) {
                index += 1
            }
        }
        return foodItems;
    }

    return (
        <FuramaContainer
            onShowCart={true}
            title={'Đồ ăn và Thức uống'}
            navigation={navigation}
            style={{}}
            headerMode={HEADER_MODE.BACK}
            renderContentView={() => {
                return (
                    <FuramaFlatList
                        data={categories}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                            <>
                                <FuramaView flexDirection={'row'}>
                                    <FuramaText
                                        style={styles.txtCategories}
                                        text={item.category_name}
                                    />
                                    <FuramaView style={{
                                        borderBottomWidth: Dimens.scale(1 / 3),
                                        flex: 1,
                                        top: Dimens.scale(-15),
                                        borderColor: 'white'
                                    }}/>
                                </FuramaView>
                                <FuramaFlatList
                                    keyExtractor={item => item.id}
                                    horizontal={true}
                                    renderItem={renderItem}
                                    data={handleFoodItems(item.items)}
                                />
                            </>
                        }
                    />
                );
            }}
        />
    );
};
const styles = StyleSheet.create({
    txtCategories: {
        margin: Dimens.scale(10),
        fontSize: FontSizes.size35,
        fontWeight: 'bold'
    }
})

export default FoodContainer;
