import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import FuramaView from "./components/common/FuramaView";
import FuramaText from "./components/common/FuramaText";
import FuramaFlatList from "./components/common/FuramaFlatList";
import FuramaImage from "./components/common/FuramaImage";

const App = () => {
  const DATA = [
    {
      title: "Đồ ăn & thức uống",
      icon: require("./img/Food_Drink.png"),
    },
    {
      title: "Minibar",
      icon: require("./img/Minibar.png"),
    },
    {
      title: "Đặt bàn",
      icon: require("./img/Dinner.png"),
    },
    {
      title: "Giặt ủi",
      icon: require("./img/Laundry.png"),
    },
    {
      title: "Sức khỏe & Làm đẹp",
      icon: require("./img/Spa.png"),
    },
    {
      title: "Đặt lịch dọn phòng",
      icon: require("./img/Clean_room.png"),
    },
    {
      title: "Đánh giá",
      icon: require("./img/Rate.png"),
    },
  ];
  const DATA_2 = [
    {
      title: "Thưởng thức khung cảnh ngoạn mục của Thành phố Đà Nẵng từ hình ảnh",
      image: require("./img/News1.png"),
    },
    {
      title: "Thưởng thức khung cảnh ngoạn mục của Thành phố Đà Nẵng từhình ảnh",
      image: require("./img/News2.png"),
    },
    {
      title: "Thưởng thức khung cảnh ngoạn mục của Thành phố Đà Nẵng từhình ảnh",
      image: require("./img/News3.png"),
    },
  ];

  const Item1 = ({ title, icon }) => {
    return (
      <TouchableOpacity
        style={{
          margin: 17,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            style={{
              height: 60,
              resizeMode: "contain",
            }}
            source={icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 7,
            // marginLeft: 20,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FuramaText
            style={{
              fontSize: 12,
            }}
            text={title}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const Item2 = ({ title, image }) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 17,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 250,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              borderRadius: 7,
              height: 120,
              resizeMode: "contain",
            }}
            source={image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 7,
            width: 180,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FuramaText
            style={{
              fontSize: 12,
            }}
            numberOfLines={2}
            text={title}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const renderItem1 = ({ item }) => (
    <Item1 
    title={item.title} 
    icon={item.icon} 
    />
  );

  const renderItem2 = ({ item }) => (
    <Item2 
    title={item.title} 
    image={item.image} 
    />
  );

  return (
    <FuramaView
      style={{
        flex: 1,
        backgroundColor: "#056055",
        paddingTop: 20,
      }}
    >
      <FuramaView
        style={{
          flexDirection: "row",
        }}
      >
        <FuramaText
          style={{
            fontSize: 20,
            fontWeight: "bold",
            lineHeight: 22,
            marginLeft: 20,
          }}
          text={"Xin chào " + "Nguyễn Khắc Tuấn"}
        />

        <Image
          source={require("./img/History_clock.png")}
          style={{
            width: 19,
            height: 19,
            position: "absolute",
            right: 35,
          }}
        />
        <FuramaView
          style={{
            flexDirection: "row",
            width: 16,
            height: 16,
            position: "absolute",
            right: "2%",
            top: "10%",
          }}
        >
          <Image
            style={{
              position: "absolute",
              right: "30%",
              width: 16,
              height: 16,
            }}
            source={require("./img/Notification.png")}
          />
          <FuramaView
            style={{
              width: 10,
              height: 10,
              position: "absolute",
              right: "5%",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Image
              style={{
                width: 12,
                height: 12,
                position: "absolute",
                right: "10%",
              }}
              source={require("./img/Notification_number.png")}
            />
            <FuramaText
              style={{
                fontSize: 9,
              }}
              text={"2"}
            />
          </FuramaView>
        </FuramaView>
      </FuramaView>

      <FuramaView
        style={{
          flexDirection: "row",
        }}
      >
        <FuramaText
          style={{
            fontSize: 12,
            fontWeight: "400",
            lineHeight: 21,
            marginTop: 2,
            marginLeft: 23,
          }}
          text={"Chúc bạn có một kì nghỉ tuyệt vời"}
        />

        <Image
          style={{
            width: 20,
            height: 17,
            marginTop: 3,
            marginLeft: 10,
          }}
          source={require("./img/Group31.png")}
        />
      </FuramaView>

      <FuramaFlatList
        style={{
          height: 250,
          flexDirection: "row",
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem1}
      />

      <FuramaText
        style={{
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 25,
          marginLeft: 20,
        }}
        text={"Tin tức"}
      />

      <FuramaFlatList
        style={{
          height: 200,
          flexDirection: "row",
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA_2}
        renderItem={renderItem2}
      />
    </FuramaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
