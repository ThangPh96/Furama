import React, { useState, useEffect } from "react";
import FuramaView from "../components/common/FuramaView";
import FuramaContainer from "../components/common/FuramaContainer";
import { HEADER_MODE, NAVIGATION_CONSTANTS } from "../common/Constants";
import FuramaFlatList from "../components/common/FuramaFlatList";
import FuramaText from "../components/common/FuramaText";
import FoodApis from "../services/apis/FoodApis";
import Dimens from "../common/Dimens";
import FuramaImage from "../components/common/FuramaImage";
import Images from "../common/Images";
import FuramaTouchableOpacity from "../components/common/FuramaTouchableOpacity";

const FoodContainer = (props) => {
  const { navigation } = props;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const onSuccess = (res) => {
      // console.log("res.data.categories", res.data.categories);
      setCategories(res.data.categories);
    };
    const onErr = (err) => {
      alert("Da co loi xay ra khi get service");
    };
    FoodApis.getFood(onSuccess, onErr);
  }, []);

  const FoodItem = (props) => {
    const { item } = props;
    console.log("item.price_list.list_price", item.price_list.list_price);
    return (
      <FuramaTouchableOpacity
        style={{
          marginHorizontal: Dimens.scale(8),
          marginVertical: Dimens.verticalScale(8),
          borderRadius: Dimens.scale(8),
        }}
        onPress={() => navigation?.navigate(NAVIGATION_CONSTANTS.FOOD, {
          duc: item
        })}

      >
        <FuramaText
          style={{
            margin: Dimens.scale(10),
          }}
          text={item.item_name}
        />
        <FuramaImage
          // uri={item.thumbnail}
          localSource={Images.im_welcome}
          style={{
            width: Dimens.scale(200),
            height: Dimens.scale(100),
            borderRadius: Dimens.scale(8),
          }}
        />
        <FuramaText
          style={{
            alignSelf: "center",
            textShadowColor: "black",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 20,
            position: 'absolute',
            bottom: Dimens.scale(8)
          }}
          text={item.price_list.list_price}
        />
      </FuramaTouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <FuramaView>
        <FoodItem item={item[0]} />
        {item[1] && <FoodItem item={item[1]} />}
      </FuramaView>
    );
  };

  const handleFoodItems = (items) => {
    const foodItems = [];
    let index = 0;
    for (let i = 0; i < items.length; i += 1) {
      if (foodItems[index] === undefined) {
        foodItems[index] = [];
      }
      foodItems[index].push(items[i]);
      if (foodItems[index].length === 2) {
        index += 1;
      }
    }
    return foodItems;
  };

  return (
    <FuramaContainer
      navigation={navigation}
      style={{}}
      headerData={{
        onShowCart: true,
        navigation: navigation,
        headerMode: HEADER_MODE.BACK,
        hasHeader: true,
        title: 'Đồ ăn & thức uống',
        rightIcon: Images.im_cart
      }}
      renderContentView={() => {
        return (
          <FuramaFlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <FuramaText style={{ margin: 10 }} text={item.category_name} />
                <FuramaFlatList
                  horizontal={true}
                  renderItem={renderItem}
                  data={handleFoodItems(item.items)}

                />
              </>
            )}
          />
        );
      }}
    />
  );
};

export default FoodContainer;
