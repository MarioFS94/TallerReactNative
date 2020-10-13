import React from 'react';
import { Text, FlatList } from 'react-native';
import Product from "eco/src/screens/ProductsList/Product";

class ProductsList extends React.Component {
    
    render = () => {
        const { products, loading } = this.props;
        return (<FlatList
            data={products}
            renderItem={({item}) => loading ? <Text>Loading...</Text> : <Product product={item} />}
            keyExtractor = {(item, index) => index.toString()}
        />);
    };
};

export default ProductsList;