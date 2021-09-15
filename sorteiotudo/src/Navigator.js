import { NativeBaseProvider } from 'native-base';
import React from 'react';
import AmigoSecreto from './screens/AmigoSecreto';

const config = {
    dependencies: {
        'linear-gradient': require('react-native-linear-gradient').default
    }
}

const Navigator = props => {
    return (
        <NativeBaseProvider  config={config}>
            <AmigoSecreto />
        </NativeBaseProvider>
    )
}
export default Navigator;

