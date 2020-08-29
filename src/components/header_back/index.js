import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';

const HeaderWithBackButton = ({title, backPress}) => {
  return (
    <ImageBackground
      style={styles.imageBackgroundContainer}
      source={require('../../assets/general/bc_nav_bar.png')}>
      <View style={styles.containerImages}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => backPress()}>
            <Image
              style={[styles.icon, {marginLeft: 10}]}
              source={require('../../assets/navigation_bar/ic_back.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, {alignItems: 'center'}]}>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View style={[styles.row, {alignItems: 'center'}]}></View>
      </View>
    </ImageBackground>
  );
};

export default HeaderWithBackButton;
