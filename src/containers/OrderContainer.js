import React, {useState, useEffect} from "react";
import FuramaView from "../components/common/FuramaView";
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE, NAVIGATION_CONSTANTS} from "../common/Constants";
import FuramaFlatList from "../components/common/FuramaFlatList";
import FuramaText from "../components/common/FuramaText";
import FoodApis from "../services/apis/FoodApis";
import Dimens from "../common/Dimens";
import FuramaImage from "../components/common/FuramaImage";
import Images from "../common/Images";
import FuramaTouchableOpacity from "../components/common/FuramaTouchableOpacity";
import {TextInput} from "react-native";
import { color } from "react-native-reanimated";
import FontSizes from "../common/FontSizes";

const OrderContainer = (props) => {
  const { navigation } = props;
  const [categories, setCategories] = useState([]);

  const FoodItem = (props) => {
    const {item} = props;
    return (
      <FuramaView
        style={{
          width: Dimens.widthScreen,
          height: Dimens.scale(100),
          marginHorizontal: Dimens.scale(8),
          marginVertical: Dimens.scale(8),
          backgroundColor: 'red'
        }}
      >
        
              
      </FuramaView>
    );
  };

  const renderItem = ({item, index}) => {
    return (
        <FoodItem item={item[0]}/>
    );
  };

  const OrderView = () => {
    return (
      <>
        <FuramaView
          style={{
            position: "absolute",
            bottom: 0,
            height: Dimens.scale(100),
            width: Dimens.widthScreen,
          }}
        >
          <FuramaTouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              width: Dimens.widthScreen * 0.9,
              height: Dimens.scale(70),
              borderRadius: Dimens.scale(10),
              marginVertical: Dimens.scale(5),
              backgroundColor: '#056055',              
            }}
            onPress={() => {
              navigation.navigate(NAVIGATION_CONSTANTS.DETAIL)
            }}
          >
            <FuramaText
              style={{
                fontSize: FontSizes.size25,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginHorizontal: Dimens.scale(12),
              }}
              text={'Gửi yêu cầu gọi món'}
            />
            <FuramaText
              style={{
                fontSize: FontSizes.size25,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginHorizontal: Dimens.scale(12),
              }}
              text={'1.650.000 đ'}
            />
          </FuramaTouchableOpacity>
        </FuramaView>
      </>
    )
  }

  const ViewFooter = () => {
    return (
      <FuramaView
        style={{
          height: Dimens.scale(170),
        }}
      />
    );
  };


  return (
    <FuramaContainer
      navigation={navigation}
      headerData={{
        headerMode: HEADER_MODE.BACK,
        hasHeader: true,
        title: 'Món đã chọn',
      }}
      renderContentView={() => {
        return (
          <FuramaView
            style={{
              backgroundColor: "white",
              flex: 1,
            }}
          >
            <FuramaFlatList
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <>
                  <FuramaText
                    style={{
                      margin: Dimens.scale(5),
                      color: "black",
                    }}
                    text={item.category_name}
                  />
                  <FuramaFlatList
                    horizontal={true}
                    renderItem={renderItem}
                    data={item.items}
                  />
                </>
              )}
              ListFooterComponent={ViewFooter()}
            />
            <OrderView/>
          </FuramaView>
        );
      }}
    />
  );
};

export default OrderContainer;
