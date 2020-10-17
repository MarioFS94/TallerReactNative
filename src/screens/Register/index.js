import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import OwnStyles from "Ecommerce/src/styles/OwnStyles";
import CheckBox from '@react-native-community/checkbox';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      pass: '',
      passCopy: '',
      terms: false,
      error: '',
      sending: false
    };
  }

  onSubmit = () => {
    const { user, pass, passCopy, email, terms } = this.state;
    
    this.setState({ sending: true });
    try{
      //compruebo valores
      if (pass === passCopy) {
        if (terms) {
          fetch('http://10.0.2.2:3004/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user, email, pass})
            })
            .then((response) => response.json())
            .then((data) => {
                Alert.alert('Registrado');
                console.log('user', {user, email, pass}, '\n result: ', data);
            })
            .catch((error) => console.error(error));
        }
      }

    } catch(err) {
      this.setState({ error: err.message });
      Alert.alert('error');
    } finally {
      this.setState({ sending: false });
    }
  }

  onChangeTerms = terms => this.setState({ terms });
  
  onChangeUser = user => this.setState({ user });
  
  onChangeEmail = email => this.setState({ email });

  onChangePass = pass => this.setState({ pass });

  onChangePassCopy = passCopy => this.setState({ passCopy });

  render() {
    const { user, pass, passCopy, email, terms } = this.state;
    return (
      <View style={OwnStyles.container}>
        <Text> Usuario: </Text>
        <TextInput 
          placeholder="Nombre"
          style={OwnStyles.input}
          value={user}
          onChangeText={this.onChangeUser}
        />
        <Text> Email: </Text>
        <TextInput 
          placeholder="nombre@ejemplo.com"
          style={OwnStyles.input}
          value={email}
          onChangeText={this.onChangeEmail}
        />
        <Text> Contraseña: </Text>
        <TextInput 
          placeholder="Contraseña"
          style={OwnStyles.input}
          value={pass}
          onChangeText={this.onChangePass}
          secureTextEntry
        />
        <Text> Repetir contraseña: </Text>
        <TextInput 
          placeholder="Repetir contraseña"
          style={OwnStyles.input}
          value={passCopy}
          onChangeText={this.onChangePassCopy}
          secureTextEntry
        />
        <View>
          <Text>Acepto los términos y condiciones</Text>
          <CheckBox
            disabled={false}
            value={terms}
            onValueChange={this.onChangeTerms}
          />
        </View>
        <Button 
          onPress={this.onSubmit}
          title="Registrar"
          color="#841584"
        />
      </View>
    );
  }
}

export default Register;
