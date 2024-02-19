import {  StyleSheet, Text,  View } from 'react-native';
import Producto from './Componentes/Producto';
import Productos from './Componentes/Productos';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Encabezados</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Text>Hola</Text>
      <Productos/>
    </View>
  )
}

export const Pie=()=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export const Pie2=(props)=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{props.opA}</Text>
        <Text style={styles.texto}>{props.opB}</Text>
        <Text style={styles.texto}>{props.opC}</Text>
        <Text style={styles.texto}>{props.opD}</Text>
    </View>
  )
}

export const Pie3=({op1, op2, op3,op4})=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{op1}</Text>
        <Text style={styles.texto}>{op2}</Text>
        <Text style={styles.texto}>{op3}</Text>
        <Text style={styles.texto}>{op4}</Text>
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
