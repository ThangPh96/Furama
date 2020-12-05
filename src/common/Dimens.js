import {Dimensions} from "react-native";

const guidelineBaseWidth = 411;
const guidelineBaseHeight = 820;

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
console.log(Math.floor(widthScreen));
console.log(Math.floor(heightScreen));


const scale = size => (widthScreen / guidelineBaseWidth) * size;
const verticalScale = size => (heightScreen / guidelineBaseHeight) * size;

export default {
  widthScreen,
  heightScreen,
  scale,
  verticalScale,
};
