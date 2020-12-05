import PropTypes from "prop-types";
import {HEADER_MODE} from "../../common/Constants";
import HomeHeader from "../home/HomeHeader";
import DetailHeader from "./DetailHeader";
import React from "react";
import {PropsType} from "react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type";

FuramaHeader.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  headerData: {
    hasHeader: PropTypes.bool,
    headerMode: PropTypes.string,
    title: PropTypes.string,
    rightIcon: PropTypes.any,
  },
  navigation: PropTypes.object,
};

FuramaHeader.defaultProps = {
  headerData: {
    hasHeader: true,
    headerMode: null,
  },
};

function FuramaHeader(props) {
  const {headerData, style, navigation} = props;
  switch (headerData.headerMode) {
    case HEADER_MODE.HOME:
      return <HomeHeader
        style={style}
        headerData={headerData}
      />;
    case HEADER_MODE.BACK:
      return (
        <DetailHeader
          style={style}
          headerData={headerData}
        />
      );
    default:
      return null;
  }
}

export default FuramaHeader;
