
import React from "react";
import { 
    MainContent,
    ProductScreen,
    Cesta,
    Login,
    Register
} from "Ecommerce/src/screens";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
/* import menu from 'Ecommerce/assets/images/menu.svg';
import { SvgUri } from 'react-native-svg'; */

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNav = () => (
    <Stack.Navigator
        /* screenOptions={{
            headerLeft: () => <SvgUri
                                    width="100%"
                                    height="100%"
                                    uri='../../assets/images/menu.svg'
                                />
    }} */>
        <Stack.Screen
            name="Home"
            component={MainContent}
            options={{ title: 'Productos' }}
        />
        <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{ title: 'Producto' }}
        />
    </Stack.Navigator>
);
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                /* screenOptions={{
                    header: 'HEADER',
                    headerMode: 'screen',
                    headerTitle: 'Main Screen Header',
                    navigationOptions: ({ navigation }) => {
                        return {
                            header: () => 'Header'
                        };
                    },
                    headerLeft: () => <Image source={ require(menu) } />
                }} */
            >
                <Drawer.Screen
                    name="Home"
                    component={StackNav}
                    options={{ title: 'Productos' }}
                />
                <Drawer.Screen
                    name="Cesta"
                    component={Cesta}
                    options={{ title: 'Pedidos' }}
                />
                <Drawer.Screen
                    name="Inicio"
                    component={Login}
                    options={{ title: 'Inicio de sesión' }}
                />
                <Drawer.Screen
                    name="Registro"
                    component={Register}
                    options={{ title: 'Registro' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
