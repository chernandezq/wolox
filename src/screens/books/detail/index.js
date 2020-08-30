import React, {useEffect, useContext} from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './styles';
import ButtonBlue from '../../../components/buttons/blue';
import ButtonWhite from '../../../components/buttons/white';
import {color_background} from '../../../helpers/constants';
import {AuthContext} from '../../../navigation/AuthNavigator';
import HeaderWithBackButton from '../../../components/header_back';
import List from '../../../components/list';
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';

const BooksDetail = (props) => {
  const {navigation} = props;
  const {item} = props.route.params;
  const {state, dispatch} = useContext(AuthContext);

  const backPress = () => {
    navigation.goBack();
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.container, {width: '100%', marginVertical: 5 * 2}]}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('BooksDetail', {item});
        }}>
        <View style={styles.body}>
          <View style={styles.row}>
            <Image
              style={{width: 60, height: 80}}
              source={{
                uri: item.image_url
                  ? item.image_url
                  : 'https://res.cloudinary.com/komercia-store/image/upload/v1550852556/placeholder/product-image-placeholder.jpg',
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: color_background}}>
      <HeaderWithBackButton
        title={'BOOK DETAIL'}
        backPress={backPress}></HeaderWithBackButton>

      <ScrollView style={{flex: 1}}>
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
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            flex: 0.4,
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
          }}>
          <FlatList
            horizontal={true}
            data={state.books}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BooksDetail;
