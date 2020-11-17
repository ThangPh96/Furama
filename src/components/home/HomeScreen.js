import React from 'react';
import FuramaView from "../common/FuramaView";
import ItemType from "./ItemType";
import {ImageBackground} from "react-native";
import ItemMarketing from "./ItemMarketing";


const HomeScreen = () => {
    return (
        <FuramaView
            style={{
                flex: 1,
                backgroundColor: '#10665a'
            }}
        >
            <ItemType/>
            <ImageBackground source={require('../../assets/images/im_background/im_background.png')}
                             resizeMode={'cover'}
                             style={{flex: 1, justifyContent: "center"}}/>
            <ItemMarketing/>

        </FuramaView>
    );
};


export default HomeScreen;
