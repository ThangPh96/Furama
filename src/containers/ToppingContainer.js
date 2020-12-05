import React, {} from 'react';
import {} from 'react-native';
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE} from "../common/Constants";
import TypeToppingList from "../components/topping/TypeToppingList";
import SelectionToppingItem from "../components/topping/SelectionToppingItem";
import FuramaView from "../components/common/FuramaView";
import Dimens from "../common/Dimens";
import store from "../redux/stores/Store";
import {setCartData} from "../redux/actions/FoodActions";

function ToppingContainer(props) {
  const {navigation, route} = props
  const {item} = route.params || {}

  const orderFood = () => {
    const state = store.getState();
    const {cartData} = state.food;
    const arr = cartData.filter((cartItem) => cartItem.id === item.id)
    if (arr?.length === 0) {
      cartData.push(item)
      store.dispatch(setCartData(cartData))
    }
    navigation.goBack()
  }

  return (
    <FuramaContainer
      headerData={{
        navigation: navigation,
        headerMode: HEADER_MODE.BACK,
        hasHeader: true,
        title: item?.item_name,
      }}
      title={'topping'}
      renderContentView={() => {
        return (
          <FuramaView
            style={{
              flex: 1,
            }}
          >
            <TypeToppingList
              style={{
                marginBottom: Dimens.verticalScale(120)
              }}
            />
            <SelectionToppingItem
              orderFood={orderFood}
            />
          </FuramaView>
        )
      }}
    />
  );
}

export default ToppingContainer;
