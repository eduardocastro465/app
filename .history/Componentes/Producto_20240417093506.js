import { ActivityIndicator, Alert, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Producto = ({route}) => {
    const {id}=route.params
    const [dato,setDato]=useState(null)
    const [load,setLoad]=useState(false)

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/'+id)
    //     .then((res)=>res.json())
    //     .then((obj)=>{
    //         setDato(obj)
    //         setLoad(true)
    //     })
    //     .catch((err)=>Alert.alert('Ocurrio un error : '+err))
    // },[])

    async function getDogBreeds() {
        try {
          const response = await fetch('https://api.thedogapi.com/v1/breeds');
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error al obtener las razas de perros:', error);
        }
      }
      
      getDogBreeds();
      
    const screenL=()=>{
        return(
        <View>
            <Text>Producto</Text>
            <Text>Titulo : {dato.title}</Text>
            <Text>Precio : {dato.price} </Text>
            <Text>Descripcion : {dato.description} </Text>
            <Image source={{uri:dato.image}} 
            style={{height:50,width:50}}/>
            <Text>Valoracion : {dato.rating.rate} </Text>
            <Text> {dato.rating.count} personas compraron este producto</Text>
        </View>
        )
    }

    const screenU=()=>{
        return(
            <View>
                <Text>Cargando Datos...</Text>
                <ActivityIndicator/>
            </View>
        )
    }

  return (
    <View>
    {load?screenL():screenU()}
    </View>
  )
}

export default Producto