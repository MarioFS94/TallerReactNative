import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import OwnStyles from "Ecommerce/src/styles/OwnStyles";
import { useNavigation } from '@react-navigation/native';

/* class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      error: '',
      sending: false
    };
  }

  onSubmit = () => {
    const { user, pass } = this.state;

    this.setState({ sending: true });
    try{
      //compruebo valores
      fetch('http://10.0.2.2:3004/users')
        .then((response) => response.json())
        .then((data) => {
            for (let userDB of data){
              if (user === userDB.name) {
                if (pass === userDB.pass) {
                  Alert.alert('Sesion iniciada');
                  console.log('userDB: ', userDB);
                } else {
                  Alert.alert('Usuario incorrecto');
                }
              } 
            }
        })
        .catch((error) => console.error(error));

    } catch(err) {
      this.setState({ error: err.message });
      Alert.alert('error');
    } finally {
      this.setState({ sending: false });
    }
  }
  
  onChangeUser = user => this.setState({ user });
  
  onChangePass = pass => this.setState({ pass });

  render() {
    const { user, pass } = this.state;
    //const navigation = useNavigation();

    return (
      <View style={OwnStyles.container}>
        <Text> Usuario: </Text>
        <TextInput 
          placeholder="Nombre"
          style={OwnStyles.input}
          value={user}
          onChangeText={this.onChangeUser}
        />
        <Text> Contraseña: </Text>
        <TextInput 
          placeholder="Contraseña"
          style={OwnStyles.input}
          value={pass}
          onChangeText={this.onChangePass}
          secureTextEntry
        />
        <Button 
          onPress={this.onSubmit}
          title="Iniciar sesión"
          color="#841584"
        />
        
      </View>
    );
  }
}

export default Login; */
const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    textDecorationLine: 'underline'
  }
});

const Login = () => {
  
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const navigation = useNavigation();
  
  onSubmit = () => {
    
    setSending(true);
    try{
      //compruebo valores
      fetch('http://10.0.2.2:3004/users')
        .then((response) => response.json())
        .then((data) => {
            for (let userDB of data){
              if (user === userDB.name) {
                if (pass === userDB.pass) {
                  Alert.alert('Sesion iniciada');
                  console.log('userDB: ', userDB);
                } else {
                  Alert.alert('Usuario incorrecto');
                }
              } 
            }
        })
        .catch((error) => console.error(error));

    } catch(err) {
      setError(err.message);
      Alert.alert('error');
    } finally {
      setSending(false);
    }
  }
  
  onChangeUser = user => setUser(user);
  
  onChangePass = pass => setPass(pass);

  return (
    <View style={OwnStyles.container}>
      <Text> Usuario: </Text>
      <TextInput 
        placeholder="Nombre"
        style={OwnStyles.input}
        value={user}
        onChangeText={onChangeUser}
      />
      <Text> Contraseña: </Text>
      <TextInput 
        placeholder="Contraseña"
        style={OwnStyles.input}
        value={pass}
        onChangeText={onChangePass}
        secureTextEntry
      />
      <Button 
        onPress={onSubmit}
        title="Iniciar sesión"
        color="#841584"
      />
      <Text style={styles.text} onPress={() => navigation.navigate('Registro')}> ¿No estás registrado? </Text>
      
    </View>
  );
  
}

export default Login;