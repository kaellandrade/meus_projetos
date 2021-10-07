import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import AmigoSecreto from './screens/AmigoSecreto';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
import FooterDrawer from './components/FooterDrawer';
import { connect } from 'react-redux';
import { View, SafeAreaView, StyleSheet } from 'react-native'

const config = {
    dependencies: {
        'linear-gradient': require('react-native-linear-gradient').default
    }
}


const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <HeaderDrawer />
                </View>
                <View>
                    <DrawerItemList {...props} />
                </View>
                <View style={styles.footer}>
                    < FooterDrawer />
                </View>
            </SafeAreaView>
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

function MyDrawer(props) {
    const isDark = props.darkMode;
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
                            style={
                                {
                                    padding: 10,
                                    color: ESTILOS_COMUNS.cores.secundaria,
                                }
                            } />}
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
                    drawerIcon: _ => <FontIcon
                        color={isDark ? '#fff9' : 'black'}
                        name='gifts'
                        size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                })}
                name="Amigo Secreto"
                component={AmigoSecreto}
            />
            <Drawer.Screen
                options={({ navigation, route }) => ({
                    drawerIcon: _ => <FontIcon
                        name='list-ol'
                        size={ESTILOS_COMUNS.iconesTamanhos.grande}
                        color={isDark ? '#fff9' : 'black'}
                    />
                })}
                name="Apresentações" component={Apresentacoes} />
            <Drawer.Screen
                options={({ navigation, route }) => ({
                    drawerIcon: _ => <FontIcon name='dice'
                        size={ESTILOS_COMUNS.iconesTamanhos.grande}
                        color={isDark ? '#fff9' : 'black'} />
                })}
                name="Loterias" component={Loterias} />
        </Drawer.Navigator >
    );
}
const Navigator = props => {
    const isDark = props.darkMode;
    return (
        <NavigationContainer theme={{
            ...DefaultTheme, colors: {
                ...DefaultTheme.colors,
                primary: ESTILOS_COMUNS.cores.azulPrimario,
                card: isDark ? '#242526' : 'white',
                text: isDark ? 'white' : 'black'
            }

        }}
        >
            <NativeBaseProvider config={config}>
                {MyDrawer(props)}
            </NativeBaseProvider>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: -1,
        right: 0,
        width: '100%'
    }
})

const mapStateToProps = ({ config }) => {
    return {
        darkMode: config.darkMode
    }
}


export default connect(mapStateToProps, null)(Navigator);

