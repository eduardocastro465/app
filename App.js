import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  StyleSheet, Text,  View } from 'react-native';
import { Boton } from './Componentes/Atomicos'
import {Calculadora} from './Componentes/Calculadora'
import Clima from './Componentes/Clima';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Menu' component={Home}/>
        <Stack.Screen name='Calculadora' component={Calculadora}/>
        <Stack.Screen name='Clima' component={Clima}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack= createNativeStackNavigator(); 

const Home=({navigation})=>{
  return(
    <View style={styles.container}>
      <Text>Hola esto es el Home...</Text>
      <Boton texto={'Calculadora'} accion={()=>navigation.navigate('Calculadora')}/>
      <Boton texto={'Clima'} accion={()=>navigation.navigate('Clima')}/>
      <Boton texto={'Contador'}/>
      <Boton texto={'Login'}/>
      <Boton texto={'Producto'}/>
      <Boton texto={'Productos'}/>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d9f3',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado:{
    flex:1.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#227edb'
  },
  cuerpo:{
    flex:8
  },
  pie:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#227edb'
  },
  
});
