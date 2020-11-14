import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'
import PropTypes from "prop-types";

FuramaText.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  text: PropTypes.string,
}

FuramaText.defaultProps = {
  text: '',
}

function FuramaText(props) {
  const {
    text,
    style,
  } = props;

  return <Text
    {...props}
    style={[styles.text, style]}
  >
    {text}
  </Text>
}

const styles = StyleSheet.create({
  text: {}
});

export default FuramaText;
