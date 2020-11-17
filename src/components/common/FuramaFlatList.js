import React from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';

import PropTypes from "prop-types";

FuramaFlatList.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    data: PropTypes.array,
    renderItem: PropTypes.func,
    keyExtractor: PropTypes.func
};
FuramaFlatList.defaultProps = {
    data: [],
};

function FuramaFlatList(props) {
    const {style} = props;
    return (
        <FlatList
            {...props}
            style={[styles.container, style]}
            keyboardShouldPersistTaps={'always'}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        flexGrow: 0,
    },
});

export default FuramaFlatList;
