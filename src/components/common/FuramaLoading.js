import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Dimens from "../../common/Dimens";

function FuramaLoading() {
  return <View style={styles.container}>
    <ActivityIndicator size="large" color={'white'}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    position: 'absolute',
    backgroundColor: 'black',
    width: Dimens.widthScreen,
    height: Dimens.heightScreen,
    opacity: 0.5
  },
});

export default FuramaLoading;
