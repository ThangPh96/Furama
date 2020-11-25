import React, {useState} from 'react';
import FoodList from "../components/home/FoodList";
import BeerList from "../components/home/BeerList";
import FuramaView from "../components/common/FuramaView";
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE, NAVIGATION_CONSTANTS} from "../common/Constants";
import FuramaTouchableOpacity from "../components/common/FuramaTouchableOpacity";
import {Image, Text, View} from "react-native";
import FontSizes from "../common/FontSizes";
import FuramaFlatList from "../components/common/FuramaFlatList";
import FuramaText from "../components/common/FuramaText";
import TypeMenuList from "../components/home/TypeMenuList";

const FoodContainer = (props) => {
    const {navigation} = props;

    const [categories, setCategories] = useState([]);

    const FoodItem = () => {
        return <FuramaView/>
    }

    const renderSectionItem = ({item}) => {
        return (
            <FuramaView>
                <FoodItem/>
                <FoodItem/>
            </FuramaView>
        )
    }

    const renderItem = ({item, index}) => {
        const data = [];
        item?.items?.forEach((foodItem) => {

        })
        return (
            <FuramaFlatList
                data={data}
                renderItem={renderSectionItem}
            />
        )
    }

    return (
        <FuramaContainer
            style={{}}
            headerMode={HEADER_MODE.BACK}
            renderContentView={() => {
                return (
                    <FuramaFlatList
                        scrollEnabled={false}
                        numColumns={3}
                        data={categories}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                            <FuramaView>
                                <FuramaText/>
                                <FuramaFlatList
                                    renderItem={renderItem}
                                />
                            </FuramaView>
                        }
                    />
                );
            }}
        />
    );
};


export default FoodContainer;
