import {StyleSheet} from 'react-native';
import {color_base} from '../../helpers/constants';

export const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginTop: 24,
  },
  input: {
    width: '100%',
    height: 45,
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 0.7,
    marginBottom: 20,
    borderRadius: 20,
  },
  boton: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    backgroundColor: color_base,
    height: 48,
  },
  textoBoton: {
    marginTop: 5,
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
});
