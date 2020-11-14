import {Dimensions} from "react-native";

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

const scale = size => (widthScreen / guidelineBaseWidth) * size;
const verticalScale = size => (heightScreen / guidelineBaseHeight) * size;

export default {
  widthScreen,
  heightScreen,
  scale,
  verticalScale,
};
