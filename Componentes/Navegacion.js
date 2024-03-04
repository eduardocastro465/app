
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import { Calculadora } from './Calculadora';
import Clima from './Clima'
import Producto from './Producto';
import {Login} from './Login'
import Productos from './Productos'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack= createNativeStackNavigator();
const TabsH=createBottomTabNavigator();
const StackP=createNativeStackNavigator();

//navegacion principal (de login a home)
export const NavHome=()=>{
    return(
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={NavTabsHome} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

//navegacion secundaria (tabs de home)
export const NavTabsHome=()=>{
    return(
        <TabsH.Navigator>
            <TabsH.Screen name={'Home2'} component={Home} options={{headerShown:false}}/>
            <TabsH.Screen name={'Calculadora'} component={Calculadora}/>
            <TabsH.Screen name={'Clima'} component={Clima}/>
            <TabsH.Screen name='Productos' component={StackProductos}/>
        </TabsH.Navigator>
    )
}

//navegacion de productos a producto detalle
export const StackProductos=()=>{
    return(
        <StackP.Navigator>
            <StackP.Screen name='Productos2' component={Productos} options={{headerShown:false}}/>
            <StackP.Screen name='Producto' component={Producto}/>
        </StackP.Navigator>
    )
}



