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
// import FuramaTextInput from "../components/common/FuramaTextInput";
import { TextInput } from "react-native";

const FoodDetail = (props) => {
  const { navigation, route } = props;
  const { item } = route.params;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const onSuccess = (res) => {
      setCategories(res.data.categories);
    };
    const onErr = (err) => {
      alert("Da co loi xay ra khi get service");
    };
    FoodApis.getToppings(item.id, onSuccess, onErr);
  }, []);

  const FoodItem = (props) => {
    const { item } = props;
    return (
      <FuramaTouchableOpacity
        style={{
          width: Dimens.scale(80),
          height: Dimens.scale(100),
          marginHorizontal: Dimens.scale(8),
          marginVertical: Dimens.scale(8),
        }}
      >
        <FuramaImage
          // uri={item.thumbnail}
          localSource={Images.im_food}
          style={{
            width: Dimens.scale(50),
            height: Dimens.scale(50),
            borderRadius: Dimens.scale(25),
            alignSelf: "center",
          }}
        />

        <FuramaText
          style={{
            color: "#363636",
            alignSelf: "center",
          }}
          // text={item.item_name}
          text={"ss"}
        />
        <FuramaText
          style={{
            color: "#056055",
            alignSelf: "center",
            textShadowColor: "black",
            textShadowRadius: 100,
          }}
          // text={item.price_list.list_price}
          text={"90.000 vnđ"}
        />
      </FuramaTouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <FuramaView>
        <FoodItem item={item[0]} />
      </FuramaView>
    );
  };

  imageHeader = () => {
    return (
      <FuramaImage
        localSource={Images.im_food}
        style={{
          width: Dimens.widthScreen,
          height: Dimens.widthScreen * (218 / 387),
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
        title: item.item_name,
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
              renderItem={({ item }) => (
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
              ListHeaderComponent={imageHeader()}
            />
            <FuramaView
              style={{
                width: Dimens.widthScreen - Dimens.scale(30),
                height: Dimens.scale(50),
                borderWidth: Dimens.scale(1),
                borderRadius: Dimens.scale(8),
                borderColor: "#E1E1E1",
                marginTop: Dimens.scale(10),
                marginHorizontal: Dimens.scale(15),
                flexDirection: "row",
              }}
            >
              <FuramaImage
                localSource={Images.im_note}
                style={{
                  width: Dimens.scale(40),
                  height: Dimens.scale(40),
                  alignSelf: "center",
                }}
              />
              <TextInput
                multiline={true} 
                placeholder={"Ghi chú"}
               />
            </FuramaView>
            <FuramaView
              style={{
                position: "absolute",
                bottom: 0,
                height: Dimens.scale(100),
                borderTopWidth: 1,
                borderTopColor: "#E1E1E1",
                width: Dimens.widthScreen,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItem:'center',
              }}
            >
              <FuramaView
                style={{
                  flex: 1,
                  backgroundColor: 'blue',
                  
                }}
              >
                <FuramaText
                  style={{
                    color: 'black',                    
                  }}
                  text={'Số lượng'}
                />
              </FuramaView>
              <FuramaTouchableOpacity
                style={{
                  flex: 2,
                  backgroundColor: 'red'
                }}
              >

                
              </FuramaTouchableOpacity>
            </FuramaView>
          </FuramaView>
        );
      }}
    />
  );
};

export default FoodDetail;
