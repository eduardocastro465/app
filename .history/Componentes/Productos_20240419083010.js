import { View, Text, ActivityIndicator, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const productos = () => {
    const [productosMujer, setProductosMujer] = useState([])
    const [load, setLoad] = useState(false)
    const nav = useNavigation()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudieron obtener los productos.')
                }
                return response.json()
            })
            .then(data => {
                const productosMujer = data.filter(producto => producto.category === "women's clothing")
                setProductosMujer(productosMujer)
                setLoad(true)
            })
            .catch(error => {
                console.error(error)
                // Manejo de errores, por ejemplo, mostrar una alerta
            })
    }, [])

    const Uscreen = () => {
        return (
            <View>
                <ActivityIndicator color={'darkblue'} />
                <Text>Cargando Datos...</Text>
            </View>
        )
    }

    const Card = ({ title, price, image, id }) => {
        return (
            <Pressable onPress={() => nav.navigate('Producto', { id: id })}>
                <Text>Producto : {title}</Text>
                <Text>Precio : ${price} MXN</Text>
                <Image style={{ height: 70, width: 70 }}
                    source={{ uri: image }} />
            </Pressable>
        )

    }

    const LScreen = () => {
        return (
            <View>
                <FlatList
                    data={productosMujer}
                    renderItem={({ item }) => <Card
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        id={item.id} />}
                    keyExtractor={item => item.id} />
            </View>
        )
    }

    return (
        <View>
            {load ? LScreen() : Uscreen()}
        </View>
    )
}

export default Clima;
