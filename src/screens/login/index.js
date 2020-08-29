import React, {useState, useContext} from 'react';

import {styles} from './style';
import {oauth} from '../../api';
import Loader from '../../components/loader';
import {AuthContext} from '../../navigation/AuthNavigator';
import {Text, TouchableOpacity, View, TextInput, Alert} from 'react-native';

const Login = () => {
  const {dispatch} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [textLoader, setTextLoader] = useState('');

  const validacion = () => {
    if (email && password) {
      signIn();
    } else {
      Alert.alert('Error', 'Los campos son requeridos');
    }
  };

  const signIn = async () => {
    setLoader(true);
    setTextLoader('Iniciando sesión, espere...');
    try {
      const response = await oauth(email, password);
      dispatch({
        type: 'LOGIN',
        payload: response.data,
      });
    } catch (err) {
      Alert.alert('Error', err.response.data.error_description);
    } finally {
      setLoader(false);
      setTextLoader();
    }
  };

  return (
    <View style={{flex: 1, marginLeft: 20, marginRight: 20}}>
      <Loader visible={loader} texto={textLoader} />

      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'flex-start', marginTop: 30}}>
          <Text style={{textAlign: 'center', fontSize: 32}}>
            Estas de vuelta!
          </Text>
          <Text style={{textAlign: 'center', fontSize: 32}}>Bienvenido...</Text>
        </View>
      </View>

      <View style={styles.container}>
        <TextInput
          keyboardType={'email-address'}
          style={styles.input}
          placeholder={'Correo'}
          onChangeText={(value) => setEmail(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder={'Contraseña'}
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.boton}
          onPress={validacion}
          underlayColor="#fff">
          <Text style={styles.textoBoton}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
