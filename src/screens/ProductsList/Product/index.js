import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const sizeImg = 50;

const styles = StyleSheet.create({
    arrowLeft: {
        /* content: ' \21F6' */
    },
    card: {
        /*flex: 2 ,
        width: sizeImg + '%' */
    },
    img: {
        /* width: sizeImg + '%' */
    },
    divider: {
        marginTop: 10
    }
});

class Product extends React.Component {
    render = () => {
        const {product} = this.props;
        return(<Card style={styles.card}>
                <Card.Image
                    style={styles.img}
                    source={{ uri: product.image }}
                />
                <Card.Divider />
                <Text>{product.description}</Text>
                <Card.Divider style={styles.divider}/>
                <Text>{product.name}</Text>
                <Card.Divider style={styles.divider}/>
                <Text>
                    {product.price} € {product.ofert && <Text>-> OFERTA {product.porc} %</Text>}
                </Text>
            </Card>);
    }
}

export default Product;
