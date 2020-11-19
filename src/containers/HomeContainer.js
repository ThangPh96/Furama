import React from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import TypeServiceList from "../components/home/TypeServiceList";
import TypeNewsList from "../components/home/TypeNewsList";
import Images from "../common/Images";
import {ScrollView} from 'react-native'
import FuramaView from "../components/common/FuramaView";

const HomeContainer = (props) => {
    const {
        navigation
    } = props;
    return (
        <FuramaContainer
            style={{}}
            renderContentView={() => {
                return (
                    <>
                        <FuramaView style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <TypeServiceList
                            navigation={navigation}
                        />
                        </FuramaView>
                        <FuramaView style={{justifyContent:'flex-end',flex:1}}>
                            <TypeNewsList/>
                        </FuramaView>
                    </>
                )
            }}
        />
    );
};


export default HomeContainer;
