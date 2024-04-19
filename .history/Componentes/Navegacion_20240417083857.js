import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import { Calculadora } from './Calculadora';
import Clima from './Clima'
import Producto from './Producto';
import {Login} from './Login'
import Productos from './Productos'
import Imc from './imc'
import {FontAwesome} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack= createNativeStackNavigator();
const TabsH=createBottomTabNavigator();
const StackP=createNativeStackNavigator();
const Drawer=createDrawerNavigator()

//navegacion principal (de login a home)
export const NavHome=()=>{
    return(
    <Stack.Navigator initialRouteName='Login'>
        
        <Stack.Screen name='Home' component={MiDrawer} options={{headerShown:false}}/>
        
    </Stack.Navigator>
    )
}

//navegacion secundaria (tabs de home)
export const NavTabsHome=()=>{
    return(
        <TabsH.Navigator>
            <TabsH.Screen name={'Home2'} component={Home} options={{headerShown:false,
            tabBarIcon:()=>(<FontAwesome name='home' size={30} color={'#321'}/>)}}/>
            <TabsH.Screen name={'Clima'} component={Clima}
            options={{tabBarIcon:()=>(<FontAwesome name='cloud'  size={30} color={'#856'}/>)}}/>
            <TabsH.Screen name='Productos' component={StackProductos}
            options={{tabBarIcon:()=>(<FontAwesome name='dollar' size={30}/>)}}/>
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

// Navegación de cajón lateral estan en la parte derecha cuando lo arrastras a la izquierda se despliega un menu
export const MiDrawer=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' options={{headerShown:false,
        drawerIcon:()=>(<FontAwesome name='home' size={30}/>)}} component={NavTabsHome}/>
            <Drawer.Screen name='Calculadora' component={Calculadora}/>
            <Drawer.Screen name='IMC' component={Imc}/>
        </Drawer.Navigator>
    )
}


