import React, {} from 'react';
import {} from 'react-native';
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE} from "../common/Constants";
import TypeToppingList from "../components/topping/TypeToppingList";
import SelectionToppingItem from "../components/topping/SelectionToppingItem";

function ToppingContainer(props) {
    const {navigation,route}=props
   // const item=route.params
    return (
       <FuramaContainer
           navigation={navigation}
           title={'topping'}
           headerMode={HEADER_MODE.BACK}
       renderContentView={()=>{
           return(
               <>
                   <TypeToppingList/>
                   <SelectionToppingItem/>
                   </>
           )
       }}
       />
    );
}

export default ToppingContainer;
