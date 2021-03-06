import {StyleSheet} from 'react-native';
import {color_background, color_base} from '../../../helpers/constants';

export const styles = StyleSheet.create({
  buttonHover: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2, // Set border width.
    borderRadius: 50,
    backgroundColor: '#fff',
    borderColor: color_base,
    color: '#FFFFFF',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 56, height: 13},
  },
  text: {
    color: color_base,
    fontFamily: 'Popins-Light',
    fontSize: 16,
    fontWeight: '700',
  },
});
