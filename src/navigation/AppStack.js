import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Other from '../screens/others';
import BooksStack from './BooksStack';
import {color_base} from '../helpers/constants';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Library"
        tabBarOptions={{
          activeTintColor: color_base,
        }}>
        <Tab.Screen
          name="Library"
          component={BooksStack}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5Icon color={color} size={size} name={'book'} />
            ),
          }}
        />
        <Tab.Screen
          name="Whishlist"
          component={Other}
          options={{
            tabBarLabel: 'Whishlist',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5Icon color={color} size={size} name={'star'} />
            ),
          }}
        />
        <Tab.Screen
          name="AddNew"
          component={Other}
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
          component={Other}
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
          component={Other}
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
