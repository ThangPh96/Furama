/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import ToppingContainer from "./src/containers/ToppingContainer";
import CartContainer from "./src/containers/CartContainer";

AppRegistry.registerComponent(appName, () => CartContainer);
