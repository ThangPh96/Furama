import PropTypes from "prop-types";
import {HEADER_MODE} from "../../common/Constants";
import HomeHeader from "../home/HomeHeader";
import DetailHeader from "../home/DetailHeader";
import React from "react";

FuramaHeader.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  headerMode: PropTypes.string
}

FuramaHeader.defaultProps = {
  headerMode: HEADER_MODE.HOME
}

function FuramaHeader(props) {
  const {
    headerMode,
    style,
      navigation
  } = props;
  switch (headerMode) {
    case HEADER_MODE.HOME:
      return <HomeHeader
        style={style}
      />
    case HEADER_MODE.BACK:
      return <DetailHeader
        style={style}
        navigation={navigation}
      />
    default:
      return <HomeHeader
        style={style}
      />
  }
}

export default FuramaHeader;
