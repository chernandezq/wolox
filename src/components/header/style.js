import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerImages: {
    flex: 1,
    flexDirection: 'row',
  },
  imageBackgroundContainer: {
    flex: 0.25,
    resizeMode: 'cover',
    alignContent: 'center',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: 'Poppins-Ligth',
    fontSize: 20,
    color: '#fff',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
