import React, {} from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE} from "../common/Constants";
import TypeToppingList from "../components/topping/TypeToppingList";


function ToppingContainer(props) {
  const {navigation, title, style} = props
  return (
    <FuramaContainer
      title={'TOPPING'}
      navigation={navigation}
      headerMode={HEADER_MODE.BACK}
      renderContentView={() => {
        return (
          <TypeToppingList/>
        )
      }}
    />
  )
}

export default ToppingContainer
