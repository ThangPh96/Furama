import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import PropTypes from "prop-types";
import LinearGradient from 'react-native-linear-gradient';
import FuramaView from "./FuramaView";

FuramaLinearGradient.propsType = {
    styles: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};
FuramaLinearGradient.defaultProps = {}

function FuramaLinearGradient(props) {
    const {style} = props
    return (
        <LinearGradient
            {...props}
            colors={['white','#dcdcdc', 'black']}
            style={[styles.linearGradient, style]}
        >

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        backgroundColor:'transparent',
        opacity:0.4,
        flex: 1,
    }
})
export default FuramaLinearGradient
