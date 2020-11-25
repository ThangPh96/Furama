import React, {} from 'react'
import {Text, StyleSheet} from 'react-native'
import FuramaFlatList from "../common/FuramaFlatList";
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";

const data = [
    {
        id: 1,
        name: 'Appetizers'
    },
    {
        id: 2,
        name: 'Soup'
    },
    {
        id: 3,
        name: 'House Specialties'
    },
    {
        id: 4,
        name: 'Fried Rice'
    },
    {
        id: 5,
        name: 'Sea Food'
    },
    {
        id: 6,
        name: 'Beer'
    },
    {
        id: 7,
        name: 'Vegetable'
    },
]


function TypeMenuList() {
    return (
        <>
            <FuramaFlatList
                horizontal={true}
                keyExtractor={item => item.id}
                data={data}
                renderItem={({item}) =>
                    <FuramaView style={styles.container}>
                        <FuramaText style={{color: 'white'}}
                                    text={item.name}
                        />
                    </FuramaView>
                }
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        borderRadius: 20,

    },
})
export default TypeMenuList
