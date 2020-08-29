import React from 'react';
import {styles} from './style';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = ({title, searchPress}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        source={require('../../assets/general/bc_nav_bar.png')}>
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
    </View>
  );
};

export default Header;
