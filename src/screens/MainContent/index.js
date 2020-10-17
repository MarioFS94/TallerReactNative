import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';
import ProductsList from "Ecommerce/src/screens/ProductsList";
import OwnStyles from 'Ecommerce/src/styles/OwnStyles';

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  }
});

class MainContent extends Component {
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
                <View style={[OwnStyles.container, styles.container]}>
                    <ProductsList products={products} loading={loading}/>
                </View>
            </>
        );
    }
}

export default MainContent;