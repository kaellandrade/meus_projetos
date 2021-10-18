/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import Navegador from './src/Navigator';
import storeConfig from './src/store/storeConfig';

import {name as appName} from './app.json';

const store = storeConfig();
const Redux = _ => (
  <Provider store={store}>
    <Navegador />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Redux);
