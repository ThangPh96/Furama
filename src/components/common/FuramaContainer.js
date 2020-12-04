import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import PropTypes from "prop-types";
import FuramaView from "./FuramaView";
import FuramaImage from "./FuramaImage";
import Images from "../../common/Images";
import Dimens from "../../common/Dimens";
import {ifIphoneX} from "react-native-iphone-x-helper";
import FuramaHeader from "./FuramaHeader";

FuramaContainer.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    hasBackgroundImage: PropTypes.bool,
    backgroundImage: PropTypes.number || PropTypes.string,
    hasHeader: PropTypes.bool,
    headerMode: PropTypes.string,
    navigation: PropTypes.object,
    onShowCart: PropTypes.bool,
}

FuramaContainer.defaultProps = {
    hasBackgroundImage: true,
    backgroundImage: Images.im_background,
    hasHeader: true
}

function FuramaContainer(props) {
    const {
        style,
        title,
        hasBackgroundImage,
        backgroundImage,
        renderContentView,
        hasHeader,
        headerMode,
        navigation,
        onShowCart
    } = props;

    return <FuramaView
        style={[styles.container, {
            paddingTop: Dimens.verticalScale(ifIphoneX(34, 0))
        }, style]}
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
        {hasHeader && <FuramaHeader
            onShowCart={onShowCart}
            title={title}
            headerMode={headerMode}
            navigation={navigation}
        />}
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
