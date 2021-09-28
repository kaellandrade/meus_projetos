import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import AmigoSecreto from './screens/AmigoSecreto';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Header } from 'react-native-elements/dist/header/Header';
import { ESTILOS_COMUNS } from './styles/estilosComuns';
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import IconSimp from 'react-native-vector-icons/SimpleLineIcons'
import Apresentacoes from './screens/Apresentacoes';
import Loterias from './screens/Loterias';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import HeaderDrawer from './components/HeaderDrawer';


const config = {
    dependencies: {
        'linear-gradient': require('react-native-linear-gradient').default
    }
}


const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView>
            <HeaderDrawer />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )

}

const colorScrens = (nameScreen) => {
    if (nameScreen == 'Amigo Secreto') {
        return ESTILOS_COMUNS.cores.larajan
    } else if (nameScreen == 'Sorteio Apresentações') {
        return ESTILOS_COMUNS.cores.azulPrimario
    } else {
        return ESTILOS_COMUNS.cores.sucesso
    }
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={(navigation) => (
                {
                    header: _ => <Header
                        centerContainerStyle
                        backgroundColor={colorScrens(navigation.route.name)}
                        barStyle="default"
                        placement="center"
                        leftComponent={_ => <IconSimp onPress={navigation.navigation.openDrawer}
                            size={ESTILOS_COMUNS.iconesTamanhos.medio}
                            name='menu'
                            style={{ padding: 10, color: ESTILOS_COMUNS.cores.secundaria }} />}
                        centerComponent={
                            {
                                text: `${navigation.route.name}`,
                                style: {
                                    color: '#fff',
                                    fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
                                    fontSize: 25,
                                }
                            }
                        }

                    />

                }
            )}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                options={({ navigation, route }) => ({
                    drawerIcon: _ => <FontIcon name='gifts' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                })}
                name="Amigo Secreto" component={AmigoSecreto} />
            <Drawer.Screen
                options={({ navigation, route }) => ({
                    drawerIcon: _ => <FontIcon name='list-ol' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                })}
                name="Apresentações" component={Apresentacoes} />
            <Drawer.Screen
                options={({ navigation, route }) => ({
                    drawerIcon: _ => <FontIcon name='dice' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                })}
                name="Loterias" component={Loterias} />
        </Drawer.Navigator >
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

