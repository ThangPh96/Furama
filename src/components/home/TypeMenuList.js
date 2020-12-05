import React, {} from 'react'
import {Text, StyleSheet} from 'react-native'
import FuramaFlatList from "../common/FuramaFlatList";
import FuramaView from "../common/FuramaView";
import FuramaText from "../common/FuramaText";

const data = [
    {
        id: 1,
        name: "Furama Restaurant-Don Cipriani's food 9"
    {
        id: 2,
        name: "Furama Restaurant-Don Cipriani's food 9"
    },
    {
        id: 3,
        name: "Furama Restaurant-Don Cipriani's food 9"
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
