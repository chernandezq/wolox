import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/books/home';
import Detail from '../screens/books/detail';
import {color_base} from '../helpers/constants';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: color_base,
        }}>
        <Tab.Screen
          name="Library"
          component={Home}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5Icon color={color} size={size} name={'book'} />
            ),
          }}
        />
        <Tab.Screen
          name="Whishlist"
          component={Home}
          options={{
            tabBarLabel: 'Whishlist',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5Icon color={color} size={size} name={'star'} />
            ),
          }}
        />
        <Tab.Screen
          name="AddNew"
          component={Home}
          options={{
            tabBarLabel: 'AddNew',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5Icon
                color={color}
                size={size}
                name={'plus-circle'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Rentals"
          component={Home}
          options={{
            tabBarLabel: 'Rentals',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5Icon
                color={color}
                size={size}
                name={'check-circle'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Detail}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5Icon color={color} size={size} name={'cog'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
