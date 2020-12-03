import React from 'react';
import {Provider, useSelector} from "react-redux";
import store from "./redux/stores/Store";
import AppContainer from "./AppContainer";


const App = () => {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
};

export default App;
