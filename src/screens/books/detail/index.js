import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Detail = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={{flex: 0.1, alignItems: 'center'}}>
        <Text>Mi detalle</Text>
      </View>

      <Text>Detalle </Text>
    </SafeAreaView>
  );
};

export default Detail;
