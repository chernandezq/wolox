import React from 'react';
import {styles} from './style';
import {View, TouchableOpacity, Text, Image} from 'react-native';

const Card = ({onPress, item}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {width: '100%', marginVertical: 5 * 2}]}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={styles.body}>
        <View style={styles.row}>
          <Image
            style={styles.thumbnail}
            source={{
              uri: item.image_url
                ? item.image_url
                : 'https://res.cloudinary.com/komercia-store/image/upload/v1550852556/placeholder/product-image-placeholder.jpg',
            }}
          />

          <View style={styles.containerText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
