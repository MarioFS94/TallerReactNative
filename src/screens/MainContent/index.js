import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StatusBar,
} from 'react-native';
import ProductsList from "eco/src/screens/ProductsList";
import OwnStyles from 'eco/src/styles/OwnStyles';

export default class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: false
        };
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts() {
        this.setState({ loading: true });
        
        fetch('http://10.0.2.2:3004/items')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ products: data });
            })
            .catch((error) => console.error(error))
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        const {products, loading} = this.state;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ProductsList products={products} loading={loading}/>
                </SafeAreaView>
            </>
        );
    }
}
