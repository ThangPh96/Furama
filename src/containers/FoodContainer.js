import React, {useEffect, useState} from 'react';
import {SectionList} from 'react-native'
import FuramaView from "../components/common/FuramaView";
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE, NAVIGATION_CONSTANTS} from "../common/Constants";
import FuramaFlatList from "../components/common/FuramaFlatList";
import FuramaText from "../components/common/FuramaText";
import FoodApis from "../services/apis/FoodApis";
import {Text} from "react-native-reanimated";


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
                                <FuramaText
                                    style={{margin:10}}
                                    text={item.category_name}/>
                                <FuramaFlatList
                                    renderItem={renderItem}
                                />
                            </FuramaView>
                        }
                    />
                    // <SectionList
                    // sections={categories}
                    // keyExtractor={(item, index) => item + index}
                    // renderSectionHeader={({ section}) => (
                    //     <Text >{section.category_name}</Text>
                    // )}
                    // />

                );
            }}
        />
    );
};


export default FoodContainer;
