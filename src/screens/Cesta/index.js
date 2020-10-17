import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import OwnStyles from "Ecommerce/src/styles/OwnStyles";
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center"
  }
});

const Cesta = () => {

    const [sending, setSending] = useState(false);
    const [cesta, setCesta] = useState([]);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [listProds, setListProds] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setSending(true);
        getData();
    }, []);
  
    const getData = async () => {
      
      await fetch('http://10.0.2.2:3004/cesta')
        .then(res => res.json())
        .then(dataCesta => {
          //console.log('dataCesta: ', dataCesta);
          setCesta(dataCesta);

          fetch('http://10.0.2.2:3004/items')
            .then(result => result.json())
            .then(dataProd => {
              //console.log('dataProd', dataProd);
              setProducts(dataProd);
              prepareData();
            })
        });
    }
    const prepareData = () => {
        let itemsID = [];
        for (const item of cesta) {
          //Guarda los IDs de los productos de la cesta en un vector
          itemsID.push(item.item);
        }

        let list = [];
        for (const product of products) {
          for (let index = 0; index < itemsID.length; index++) {
            if (itemsID[index] === product.id) {
              //Compara los IDs que contiene la cesta con los de todos los productos y mete los productos de la cesta en una lista
              list.push(product);
            }
          }
        }
        setListProds(list);
        console.log('\n\nlistProds', listProds, '\n\ncesta: ', cesta);
        //calcula el precio total con la cantidad a comprar de cada producto
        for (const item of cesta) {
          for (const prod of list) {
            if (item.item === prod.id) {
              setTotal(total + (prod.price * item.cantidad));
            }
          }
        }
    }
    return (
        <ScrollView>{/* contentContainerStyle={OwnStyles.container} */}
            <Button title="Seguir comprando" onPress={() => navigation.navigate("Home")}/>            
            {
                listProds.map( (product, i) => (
                    <Card key={product.id + i}>
                        <Card.Image
                            style={styles.img}
                            source={{ uri: product.image }}
                        />
                        <Card.Divider style={OwnStyles.divider}/>
                        <Text>{product.name}</Text>
                        <Card.Divider style={OwnStyles.divider}/>
                        <View style={OwnStyles.containerPrice}>
                            <Text>
                                {product.price} € {product.oferta && <Text>-> OFERTA {product.porc} %</Text>}
                            </Text>
                        </View>
                    </Card>
                ))
            }
            
            <Text>Total: {total} €</Text>
        </ScrollView>
    );
}

export default Cesta;
