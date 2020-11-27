import React, {useState, useEffect} from 'react';
import FuramaView from "../components/common/FuramaView";
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE, NAVIGATION_CONSTANTS} from "../common/Constants";
import FuramaFlatList from "../components/common/FuramaFlatList";
import FuramaText from "../components/common/FuramaText";
import FuramaImage from "../components/common/FuramaImage";
import Images from "../common/Images";
import Dimens from "../common/Dimens";

const FoodContainer = (props) => {
  const {navigation} = props;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const onSuccess = (res) => {
      console.log('res.data.categories', res.data.categories)
      setCategories(res.data.categories)
    }
    const onErr = err => {
      alert('Da co loi xay ra khi get service')
    }
    FoodApis.getFood(onSuccess, onErr)
  }, [])

  const FoodItem = (props) => {
    const {item} = props;
    console.log('item.price_list.list_price', item.price_list.list_price)
    return <FuramaView
      style={{
        marginHorizontal: Dimens.scale(8),
        marginVertical: Dimens.verticalScale(8),
        borderRadius: Dimens.scale(8),
        backgroundColor: 'pink'
      }}
    >
      <FuramaText
        style={{
          margin: 10,
        }}
        text={item.item_name}
      />
      <FuramaImage
        // uri={item.thumbnail}
        localSource={Images.im_welcome}
        style={{
          width: 200,
          height: 100,
          borderRadius: Dimens.scale(8)
        }}
      />
      <FuramaText
        style={{margin: 10}}
        text={item.price_list.list_price}
      />
    </FuramaView>
  }

  const renderItem = ({item, index}) => {
    return (
      <FuramaView>
        <FoodItem item={item[0]}/>
        {item[1] && <FoodItem item={item[1]}/>}
      </FuramaView>
    )
  }

  const handleFoodItems = (items) => {
    const foodItems = [];
    let index = 0;
    for (let i = 0; i < items.length; i += 1) {
      if (foodItems[index] === undefined) {
        foodItems[index] = []
      }
      foodItems[index].push(items[i]);
      if (foodItems[index].length === 2) {
        index += 1
      }
    }
    return foodItems;
  }

  return (
    <FuramaContainer
      navigation={navigation}
      style={{}}
      headerMode={HEADER_MODE.BACK}
      renderContentView={() => {
        return (
          <FuramaFlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
              <>
                <FuramaText
                  style={{margin: 10}}
                  text={item.category_name}
                />
                <FuramaFlatList
                  horizontal={true}
                  renderItem={renderItem}
                  data={handleFoodItems(item.items)}
                />
              </>
            }
          />
        );
      }}
    />
  );
};


export default FoodContainer;
