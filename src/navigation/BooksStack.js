import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BooksHome from '../screens/books/home';
import BooksDetail from '../screens/books/detail';

const Stack = createStackNavigator();

const BooksStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen headerMode="none" name="BooksHome" component={BooksHome} />
      <Stack.Screen
        headerMode="none"
        name="BooksDetail"
        component={BooksDetail}
      />
    </Stack.Navigator>
  );
};

export default BooksStack;
