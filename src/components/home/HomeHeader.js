import React from 'react';
import FuramaView from "../common/FuramaView";
import ItemType from "./ItemType";
import {ImageBackground} from "react-native";
import FuramaText from "../common/FuramaText";
import FuramaImage from "../common/FuramaImage";


const HomeHeader = () => {
    return (
        <FuramaView
            style={{
                flex: 1,
            }}
        >
            <FuramaView>
               <FuramaText text={"Hello Guys"}/>
                <FuramaText text={'Hello verybody'}/>
            </FuramaView>
            <FuramaView>
                <FuramaImage
                localSource={}/>
            </FuramaView>
        </FuramaView>
    );
};


export default HomeHeader;
