import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importando el componente de navegación de tipo stack nativo
import Home from './Home'; // Importando el componente Home desde su archivo
import { Calculadora } from './Calculadora'; // Importando el componente Calculadora desde su archivo
import Clima from './Clima'; // Importando el componente Clima desde su archivo
import Producto from './Producto'; // Importando el componente Producto desde su archivo
import {Login} from './Login'; // Importando el componente Login desde su archivo
import Productos from './Productos'; // Importando el componente Productos desde su archivo
import Imc from './imc'; // Importando el componente Imc desde su archivo
import {FontAwesome} from '@expo/vector-icons'; // Importando FontAwesome para usar iconos
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importando el componente de navegación de pestañas inferior
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importando el componente de navegación de cajón lateral

const Stack = createNativeStackNavigator(); // Creando un stack de navegación nativo
const TabsH = createBottomTabNavigator(); // Creando un navegador de pestañas inferior
const StackP = createNativeStackNavigator(); // Creando otro stack de navegación nativo
const Drawer = createDrawerNavigator(); // Creando un navegador de cajón lateral

// Navegación principal (de Login a Home)
export const NavHome = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='Home' component={MiDrawer} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

// Navegación secundaria (pestañas de Home)
export const NavTabsHome = () => {
    return (
        <TabsH.Navigator>
            <TabsH.Screen name={'Home2'} component={Home} options={{headerShown:false, tabBarIcon:()=>(<FontAwesome name='home' size={30} color={'#321'}/>)}}/>
            <TabsH.Screen name={'Clima'} component={Clima} options={{tabBarIcon:()=>(<FontAwesome name='cloud'  size={30} color={'#856'}/>)}}/>
            <TabsH.Screen name='Productos' component={StackProductos} options={{tabBarIcon:()=>(<FontAwesome name='dollar' size={30}/>)}}/>
        </TabsH.Navigator>
    );
}

// Navegación de productos a detalle de producto
export const StackProductos = () => {
    return (
        <StackP.Navigator>
            <StackP.Screen name='Productos2' component={Productos} options={{headerShown:false}}/>
            <StackP.Screen name='Producto' component={Producto}/>
        </StackP.Navigator>
    );
}

// Navegación de cajón lateral
export const MiDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' options={{headerShown:false, drawerIcon:()=>(<FontAwesome name='home' size={30}/>)}} component={NavTabsHome}/>
            <Drawer.Screen name='Calculadora' component={Calculadora}/>
            <Drawer.Screen name='IMC' component={Imc}/>
        </Drawer.Navigator>
    );
}
