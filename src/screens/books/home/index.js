import React, {useContext, useEffect, useState} from 'react';

import {getBooks} from '../../../api';
import {Text, View} from 'react-native';
import List from '../../../components/list';
import Header from '../../../components/header';
import Loader from '../../../components/loader';
import {color_background} from '../../../helpers/constants';
import {AuthContext} from '../../../navigation/AuthNavigator';

const BooksHome = (props) => {
  const {navigation} = props;
  const [loader, setLoader] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  const [textLoader, setTextLoader] = useState('');
  const {state, dispatch} = useContext(AuthContext);

  useEffect(() => {
    getBooksApi();
  }, []);

  const getBooksApi = async () => {
    setLoader(true);
    setTextLoader('Obteniendo libros, espere...');
    try {
      const response = await getBooks();
      setBooks(response.data.books);
      dispatch({
        type: 'SETBOOKS',
        payload: response.data.books,
      });
    } catch (err) {
      console.warn(err);
    } finally {
      setLoader(false);
    }
  };

  const logOut = async () => {
    try {
      dispatch({
        type: 'LOGOUT',
      });
    } catch (e) {}
  };

  const searchPress = (item) => {
    console.warn(item);
  };

  const onCardPress = (item) => {
    navigation.navigate('BooksDetail', {item});
  };

  return (
    <View style={{flex: 1, backgroundColor: color_background}}>
      <Loader visible={loader} texto={textLoader} />
      <Header
        title={'LIBRARY'}
        searchPress={searchPress}
        logOut={logOut}></Header>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <List data={books} onCardPress={onCardPress}></List>
        </View>
      </View>
    </View>
  );
};

export default BooksHome;
