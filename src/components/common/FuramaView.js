import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from "prop-types";

FuramaView.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
}

FuramaView.defaultProps = {}

function FuramaView(props) {
  const {
    style,
  } = props;
  return (
    <View
      {...props}
      style={[styles.view, style]}
    />
  );
};

const styles = StyleSheet.create({
  view: {}
});

export default FuramaView;
