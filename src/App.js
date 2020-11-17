import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import FuramaView from "./components/common/FuramaView";
import FuramaText from "./components/common/FuramaText";

const App = () => {
  return (
    <FuramaView
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <FuramaText
        text={'ahihi'}
      />
    </FuramaView>
  );
};

const styles = StyleSheet.create({});

export default App;
