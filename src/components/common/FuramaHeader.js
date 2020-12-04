import PropTypes from "prop-types";
import {HEADER_MODE} from "../../common/Constants";
import HomeHeader from "../home/HomeHeader";
import DetailHeader from "./DetailHeader";
import React from "react";
import {PropsType} from "react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type";

FuramaHeader.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    headerMode: PropTypes.string,
    navigation: PropTypes.object,
    title: PropsType.string,
}

FuramaHeader.defaultProps = {
    headerMode: HEADER_MODE.HOME
}

function FuramaHeader(props) {
    const {
        onShowCart,
        headerMode,
        title,
        style,
        navigation,
    } = props;
    switch (headerMode) {
        case HEADER_MODE.HOME:
            return <HomeHeader
                style={style}
            />
        case HEADER_MODE.BACK:
            return <DetailHeader
                onShowCart={onShowCart}
                title={title}
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
