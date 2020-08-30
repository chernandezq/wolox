import AsyncStorage from '@react-native-community/async-storage';
export const initialState = {
  isAutenticated: false,
  access_token: null,
  token_type: null,
  books: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const isAutenticated = ['@isAutenticated', '1'];
      const access_token = [
        '@access_token',
        JSON.stringify(action.payload.access_token),
      ];
      const token_type = [
        '@token_type',
        JSON.stringify(action.payload.token_type),
      ];
      AsyncStorage.multiSet([access_token, token_type, isAutenticated]);
      return {
        ...state,
        isAutenticated: true,
        access_token: action.payload.access_token,
        token_type: action.payload.token_type,
      };
    case 'LOGOUT':
      AsyncStorage.clear();
      return {
        ...state,
        isAutenticated: false,
        access_token: null,
        token_type: null,
        refresh_token: null,
      };
    case 'GET_STORAGE':
      return {
        ...state,
        isAutenticated: true,
        access_token: action.payload.access_token,
        token_type: action.payload.token_type,
      };
    case 'SETBOOKS':
      return {
        ...state,
        books: [data, ...books],
      };
    default:
      return state;
  }
};
