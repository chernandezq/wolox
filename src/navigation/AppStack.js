import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';
import Other from '../screens/others';
import BooksStack from './BooksStack';
import {color_base} from '../helpers/constants';
import {NavigationContainer} from '@react-navigation/native';

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
              <Image
                style={{width: 26, height: 26, tintColor: color}}
                source={require('../assets/tool_bar/ic_library.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Whishlist"
          component={Other}
          options={{
            tabBarLabel: 'Whishlist',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 26, height: 26, tintColor: color}}
                source={require('../assets/tool_bar/ic_wishlist.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddNew"
          component={Other}
          options={{
            tabBarLabel: 'AddNew',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 26, height: 26, tintColor: color}}
                source={require('../assets/tool_bar/ic_add_new.png')}
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
              <Image
                style={{width: 26, height: 26, tintColor: color}}
                source={require('../assets/tool_bar/ic_myrentals.png')}
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
              <Image
                style={{width: 26, height: 26, tintColor: color}}
                source={require('../assets/tool_bar/ic_settings.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
