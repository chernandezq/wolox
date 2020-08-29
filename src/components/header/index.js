import React from 'react';
import {styles} from './style';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = ({title, searchPress, logOut}) => {
  return (
    <ImageBackground
      style={styles.imageBackgroundContainer}
      source={require('../../assets/general/bc_nav_bar.png')}>
      <View style={{flex: 0.1, alignItems: 'flex-end'}}>
        <Text style={{color: 'white'}} onPress={logOut}>
          Cerrar sesión{' '}
        </Text>
      </View>
      <View style={styles.containerImages}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => searchPress('hola')}>
            <Image
              style={[styles.icon, {marginLeft: 10}]}
              source={require('../../assets/navigation_bar/ic_notifications.png')}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.row,
            {
              alignItems: 'center',
            },
          ]}>
          <Text
            onPress={() => {
              searchPress('ggs22');
            }}
            style={styles.textTitle}>
            {title}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              alignItems: 'flex-end',
            },
          ]}>
          <TouchableOpacity onPress={() => searchPress('hola')}>
            <Image
              style={[styles.icon, {marginRight: 10}]}
              source={require('../../assets/navigation_bar/ic_search.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;
