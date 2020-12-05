import React, {useState, useEffect} from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import Dimens from "../../common/Dimens";
import FuramaFlatList from "../common/FuramaFlatList";
import FontSizes from "../../common/FontSizes";
import FuramaTouchableOpacity from "../common/FuramaTouchableOpacity";
import {NAVIGATION_CONSTANTS} from "../../common/Constants";
import Images from "../../common/Images";
import FuramaView from '../common/FuramaView';
import ServiceApis from "../../services/apis/ServiceApis";
import FuramaImage from "../common/FuramaImage";

const TypeServiceList = (props) => {
  const {
    navigation,
    style
  } = props;

  const [service, setService] = useState([]);
  useEffect(() => {
    ServiceApis.getSerivce((res) => {
      setService(res.data.objects)
    }, err => {
      alert('Da co loi xay ra khi get service')
    })
  }, [])

  return (
    <FuramaView
      style={[{
        width: Dimens.widthScreen,
        justifyContent: 'center',
        alignItems: 'center'
      }, style]}
    >
      <FuramaFlatList
        scrollEnabled={false}
        numColumns={4}
        data={service}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <FuramaTouchableOpacity
            style={styles.itemType}
            onPress={() => navigation?.navigate(NAVIGATION_CONSTANTS.DETAIL)}
          >
              <FuramaImage
                style={styles.imView}
                uri={item.thumbnail}
              />
              <Text 
                style={{
                   marginHorizontal: Dimens.scale(5), 
                   fontWeight: 'bold', 
                   textAlign: 'center', 
                   fontSize: FontSizes.size18,
                   }}>
                {item.service_name}
              </Text>
          </FuramaTouchableOpacity>
        }
      />
    </FuramaView>
  )
}

const styles = StyleSheet.create({
  itemType: {
    backgroundColor: 'white',
    margin: Dimens.scale(5),
    borderRadius: Dimens.scale(15),
    width: Dimens.scale(90),
    height: Dimens.scale(90),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Dimens.scale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imView: {
    width: Dimens.scale(40),
    height: Dimens.scale(40),
    resizeMode: 'contain',
    alignSelf: 'center',
  }
})

export default TypeServiceList;
