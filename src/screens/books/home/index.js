import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../../navigation/AuthNavigator';
import {SafeAreaView, Text, Alert, View, StyleSheet} from 'react-native';

const Home = () => {
  const {state, dispatch} = useContext(AuthContext);

  useEffect(() => {}, []);

  const logOut = async () => {
    try {
      dispatch({
        type: 'LOGOUT',
      });
    } catch (e) {}
  };

  return (
    <SafeAreaView>
      <View style={{flex: 0.1, alignItems: 'center'}}>
        <Text>Home</Text>
      </View>

      <Text onPress={logOut}>Cerrar sesión </Text>
    </SafeAreaView>
  );
};

export default Home;
