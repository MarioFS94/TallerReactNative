import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import OwnStyles from "Ecommerce/src/styles/OwnStyles";



const Product = ({product}) => {

    const navigation = useNavigation();
    const addCesta = () => {
        let item = product.id;
        fetch('http://10.0.2.2:3004/cesta').then(res => res.json()).then(data => {
            for (const itemCesta of data) {
                if (itemCesta.item === item) {
                    console.log('itemCesta ya existe, aumentar la cantidad PUT');
                    putCesta(itemCesta);
                    break;
                }else{
                    console.log('itemCesta no existe en la cesta');
                    postCesta(item, 1);
                    break;
                }
            }
        })
        
        console.log('producto', item, 'añadido, cantidad: ', cantidad);
    }

    const putCesta = (itemCesta) => {
        let cantidad = itemCesta.cantidad + 1;
        let item = itemCesta.item;
        fetch('http://10.0.2.2:3004/cesta/' + itemCesta.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({item, cantidad})
            })
            .then((response) => response.json())
            .then((data) => {
                Alert.alert('Modificado');
            })
            .catch((error) => console.error(error));
    }
    const postCesta = (item, cantidad) => {
        fetch('http://10.0.2.2:3004/cesta', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({item, cantidad})
            })
            .then((response) => response.json())
            .then((data) => {
                Alert.alert('Añadido');
            })
            .catch((error) => console.error(error));
    }
    return(
        <View>
            <Card>
                <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', { p: product })}>
                    <Card.Image
                        source={{ uri: product.image }}
                    />
                    <Card.Divider style={OwnStyles.divider}/>
                    <Text style={[OwnStyles.textCard, {textDecorationLine: 'underline', letterSpacing: 4}]}>{product.name}</Text>
                </ TouchableOpacity>
                <Card.Divider style={OwnStyles.divider}/>
                <View style={OwnStyles.containerPrice}>
                    <Text style={[OwnStyles.textCard, {color: 'blue'}]}>
                        {product.price} € {product.oferta && <Text>-> OFERTA {product.porc} %</Text>}
                    </Text>
                    <Button title="Añadir a la cesta" onPress={() => addCesta()}/>
                </View>
            </Card>
        </ View>
    );
}

export default Product;
