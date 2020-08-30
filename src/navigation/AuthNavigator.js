import React, {useReducer, createContext, useEffect, useState} from 'react';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Loader from '../components/loader';
import {reducer, initialState} from '../context/reducer';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext();

const AuthNavigator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loader, setLoader] = useState(false);
  const [textLoader, setTextLoader] = useState('');

  useEffect(() => {
    verifyData();
  }, []);

  const verifyData = async () => {
    setLoader(true);
    setTextLoader('Verificando inicio de sesión, espere...');
    let isAutenticated = await AsyncStorage.getItem('@isAutenticated');
    let access_token = await AsyncStorage.getItem('@access_token');
    let token_type = await AsyncStorage.getItem('@token_type');

    if (isAutenticated == '1') {
      dispatch({
        type: 'GET_STORAGE',
        payload: {
          isAutenticated: true,
          access_token: JSON.parse(access_token),
          token_type: JSON.parse(token_type),
        },
      });
    }
    setLoader(false);
    setTextLoader('');
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <Loader visible={loader} texto={textLoader} />
      {state.isAutenticated ? <AppStack /> : <AuthStack />}
    </AuthContext.Provider>
  );
};

export default AuthNavigator;
