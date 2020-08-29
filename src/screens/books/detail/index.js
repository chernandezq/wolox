import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './styles';
import ButtonBlue from '../../../components/buttons/blue';
import {color_background} from '../../../helpers/constants';
import ButtonWhite from '../../../components/buttons/white';
import HeaderWithBackButton from '../../../components/header_back';

const BooksDetail = (props) => {
  const {navigation} = props;
  const {item} = props.route.params;

  useEffect(() => {}, []);

  const backPress = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: color_background}}>
      <HeaderWithBackButton
        title={'BOOK DETAIL'}
        backPress={backPress}></HeaderWithBackButton>

      <View style={{flex: 1, marginTop: 20}}>
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
              <Text style={styles.available}>Available</Text>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.author}>{item.year}</Text>
              <Text style={styles.author}>{item.genre}</Text>
            </View>
          </View>
          <View>
            <ButtonWhite title={'ADD TO WISHLIST'}></ButtonWhite>
          </View>
          <View>
            <ButtonBlue title={'RENT'}></ButtonBlue>
          </View>
        </View>
      </View>
      <View style={{flex: 0.4, backgroundColor: 'yellow'}}></View>
    </View>
  );
};

export default BooksDetail;
