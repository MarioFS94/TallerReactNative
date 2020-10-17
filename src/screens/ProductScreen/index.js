import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import OwnStyles from "Ecommerce/src/styles/OwnStyles";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center"
  }
});

const ProductScreen = ({route}) => {
  
  const [product] = useState(route.params?.p);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Volver" onPress={() => navigation.goBack()}/>
      <Card>
        <Card.Image
          style={styles.img}
          source={{ uri: product.image }}
        />
        <Card.Divider style={OwnStyles.divider}/>
        <Text style={OwnStyles.textCard}>{product.name}</Text>
        <Card.Divider style={OwnStyles.divider}/>
        <Text>{product.description}</Text>                
        <Card.Divider style={OwnStyles.divider}/>
        <View style={OwnStyles.containerPrice}>
          <Text style={{fontSize: 20}}>
            {product.price} € {product.oferta && <Text>-> OFERTA {product.porc} %</Text>}
          </Text>
          <Button title="Añadir a la cesta" onPress={() => navigation.navigate('Cesta', { p: product })}/>
        </View>
      </Card>
    </ View>
  );
}
export default ProductScreen;