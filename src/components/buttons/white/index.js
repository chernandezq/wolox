import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';

const ButtonWhite = ({title}) => {
  return (
    <TouchableOpacity style={styles.buttonHover}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWhite;
