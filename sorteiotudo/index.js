/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import SorteioTudo from './src/Navigator';
import storeConfig from './src/store/storeConfig';
import { Text } from 'react-native'

import { name as appName } from './app.json';

const store = storeConfig();
const Redux = _ => (
    <Provider store={store}>
        <SorteioTudo />
    </Provider>
)
AppRegistry.registerComponent(appName, () => Redux);
