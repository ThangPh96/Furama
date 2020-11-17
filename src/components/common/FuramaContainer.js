import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";
import FuramaView from "./FuramaView";
import FuramaImage from "./FuramaImage";
import Images from "../../common/Images";
import Dimens from "../../common/Dimens";
import HomeHeader from "../home/HomeHeader";

FuramaContainer.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  hasBackgroundImage: PropTypes.bool,
  backgroundImage: PropTypes.number || PropTypes.string,
  hasHeader: PropTypes.bool
}

FuramaContainer.defaultProps = {
  hasBackgroundImage: true,
  backgroundImage: Images.im_background,
  hasHeader: true
}

function FuramaContainer(props) {
  const {
    style,
    hasBackgroundImage,
    backgroundImage,
    renderContentView,
    hasHeader
  } = props;
  return <FuramaView
    style={[styles.container, style]}
  >
    {hasBackgroundImage && <FuramaImage
      localSource={backgroundImage}
      resizeMode={'cover'}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimens.widthScreen,
        height: Dimens.heightScreen
      }}
    />}
    {hasHeader && <HomeHeader/>}
    {renderContentView()}
  </FuramaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10665a'
  }
});

export default FuramaContainer;
