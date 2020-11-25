import React, {} from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'
import FuramaFlatList from "../common/FuramaFlatList";
import FontSizes from "../../common/FontSizes";
import Dimens from "../../common/Dimens";
import FuramaText from "../common/FuramaText";
import Images from "../../common/Images";

const BeerList = () => {
    return (
      <>
        <FuramaText 
            style={styles.txtTitle} 
            text={"Tin Tức"} 
        />
        <FuramaFlatList        
          horizontal={true}
          data={dataMarketing}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <View 
                style={styles.container}
              >
                <Image
                  style={styles.imageMarketing}
                  source={item.image}
                  resizeMode={"cover"}
                />
                <FuramaText
                  style={styles.txtMarketing}
                  text={item.content} 
                />
              </View>
            </View>
          )}
        />
      </>
    );
}
const styles = StyleSheet.create({
    txtMarketing: {
        fontSize: FontSizes.size25,
        fontWeight: 'bold',
        color: 'white',

    },
    container: {
        marginBottom: 50,
        marginHorizontal: 10,
        width: Dimens.widthScreen / 1.2,
        height: Dimens.widthScreen / 2.5,
        borderRadius: 15,

    },
    imageMarketing: {
        width: Dimens.widthScreen / 1.2,
        height: Dimens.widthScreen / 2.5,
        borderRadius: 15,

    },
    txtTitle: {
        width: Dimens.widthScreen,
        height: Dimens.widthScreen / 10,
        borderRadius: 15,
        fontWeight: 'bold',
        fontSize: FontSizes.size40,
        paddingLeft: Dimens.widthScreen / 16,
    },
})
const dataMarketing = [
    {
        id: 1,
        image:Images.im_welcome,
        content: 'Thưởng thức khung cảnh ngoạn ngục của thành phố Đà Lạt'
    },
    {
        id: 2,
        image: Images.im_booking_table,
        content: 'Thưởng thức khung cảnh ngoạn ngục của thành phố Đà Lạt'
    },
    {
        id: 3,
        image:Images.im_clean_room,
        content: 'Thưởng thức khung cảnh ngoạn ngục của thành phố Đà Lạt'
    }
]

export default BeerList;
