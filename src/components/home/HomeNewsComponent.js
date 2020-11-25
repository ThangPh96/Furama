import {Image, TouchableOpacity} from "react-native";
import FuramaText from "../common/FuramaText";
import FuramaFlatList from "../common/FuramaFlatList";
import React from "react";
import Images from "../../common/Images";
import Dimens from "../../common/Dimens";
import FontSizes from "../../common/FontSizes";

function HomeNewsComponent() {
  const DATA_2 = [
    {
      title: "Thưởng thức khung cảnh ngoạn mục của Thành phố Đà Nẵng từ hình ảnh",
      image: Images.im_welcome,
    },
    {
      title: "Thưởng thức khung cảnh ngoạn mục của Thành phố Đà Nẵng từhình ảnh",
      image: Images.im_welcome,
    },
    {
      title: "Thưởng thức khung cảnh ngoạn mục của Thành phố Đà Nẵng từhình ảnh",
      image: Images.im_welcome,
    },
  ];

  const Item2 = ({title, image}) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: Dimens.scale(17),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: Dimens.scale(250),
            borderRadius: Dimens.scale(12),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              borderRadius: Dimens.verticalScale(7),
              height: Dimens.verticalScale(120),
              resizeMode: "contain",
            }}
            source={image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: Dimens.verticalScale(7),
            width: Dimens.scale(180),
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FuramaText
            style={{
              fontSize: FontSizes.size17,
            }}
            numberOfLines={2}
            text={title}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };


  const renderItem2 = ({item}) => (
    <Item2
      title={item.title}
      image={item.image}
    />
  );

  return (
    <>
      <FuramaText
        style={{
          fontWeight: "bold",
          fontSize: FontSizes.size17,
          lineHeight: 25,
          marginLeft: 20,
        }}
        text={"Tin tức"}
      />

      <FuramaFlatList
        style={{
          height: Dimens.verticalScale(200),
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA_2}
        renderItem={renderItem2}
      />
    </>
  )
}

export default HomeNewsComponent
