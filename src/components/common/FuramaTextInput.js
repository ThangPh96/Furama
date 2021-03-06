import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types'

const FuramaTextInput = forwardRef((props, ref) => {
  const {style} = props;
  const inputRef = useRef();
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.clear();
    },
    getValue: () => {
      return text
    }
  }));

  return (
    <TextInput
      {...props}
      ref={inputRef}
      placeholderTextColor={'Ghichú'}
      style={[styles.container, style]}
      onChangeText={(text) => {
        setText(text);
      }}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.greyscale7,
    //paddingHorizontal: AppStyles.scale(19),
    justifyContent: 'center',
  },
});

FuramaTextInput.propTypes = {
  ref: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  maxLength: PropTypes.number
};
FuramaTextInput.defaultProps = {
  style: undefined,
};

export default FuramaTextInput;
