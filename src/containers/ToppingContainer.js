import React, {} from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE} from "../common/Constants";
import TypeToppingList from "../components/topping/TypeToppingList";
import SelectionToppingItem from "../components/topping/SelectionToppingItem";


function ToppingContainer(props) {
    const {navigation,route,style}= props
    const item=route.params
    return (
        <FuramaContainer
            backgroundImage={'white'}
            hasBackgroundImage={false}
            title={item.item_name}
            navigation={navigation}
            headerMode={HEADER_MODE.BACK}
            renderContentView={() => {
                return (
                    <>
                        <TypeToppingList/>
                        <SelectionToppingItem/>
                    </>
                )
            }}
        />
    )
}

export default ToppingContainer
