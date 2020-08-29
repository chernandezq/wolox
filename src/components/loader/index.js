import React from 'react';
import {styles} from './style';
import {Modal, View, ActivityIndicator, Text} from 'react-native';
import {color_base} from '../../helpers/constants';

const Loader = ({visible, texto, props}) => {
  return (
    <Modal transparent={true} animationType={'none'} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color={color_base} />
          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
            }}>
            {texto}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
