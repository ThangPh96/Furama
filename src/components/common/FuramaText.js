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
  text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
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
  text: {
    color: 'white'
  }
});

export default FuramaText;
