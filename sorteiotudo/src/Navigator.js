import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import AmigoSecreto from './screens/AmigoSecreto';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Header } from 'react-native-elements/dist/header/Header';
import { ESTILOS_COMUNS } from './styles/estilosComuns';
const config = {
    dependencies: {
        'linear-gradient': require('react-native-linear-gradient').default
    }
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={(navigation) => (
                {
                    header: _ => <Header
                        backgroundColor={ESTILOS_COMUNS.cores.sucesso}
                        barStyle="default"
                        placement="center"
                        leftComponent={
                            {
                                icon: 'menu', color: '#fff', onPress:  navigation.navigation.openDrawer 
                            }
                        }
                        centerComponent={
                            {
                                text: `${navigation.route.name}`,
                                style: {
                                    color: '#fff',
                                    fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
                                    fontSize: 20
                                }
                            }
                        }

                    />

                }
            )}
        >
            <Drawer.Screen name="Amigo Secreto" component={AmigoSecreto} />
        </Drawer.Navigator>
    );
}

const Navigator = props => {
    return (
        <NavigationContainer>
            <NativeBaseProvider config={config}>
                {MyDrawer()}
            </NativeBaseProvider>
        </NavigationContainer>
    )
}
export default Navigator;

