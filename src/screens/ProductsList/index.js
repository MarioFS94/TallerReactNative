import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Product from "Ecommerce/src/screens/Product";
import OwnStyles from "Ecommerce/src/styles/OwnStyles";

const styles = StyleSheet.create({
  list: {
    width: "90%"
  }
});

const ProductsList = ( props ) => (
    <FlatList
      style={styles.list}
      data={props.products}
      renderItem={({item}) => props.loading ? <View style={OwnStyles.container}><Text>Loading...</Text></View> : <Product product={item} />}
      keyExtractor = {item => item.id.toString()}
    />
);

export default ProductsList;