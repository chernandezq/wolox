import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  body: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  thumbnail: {
    alignContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 120,
    borderRadius: 4,
    marginTop: 10,
    marginLeft: 20,
  },
  containerText: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: '#595959',
    fontWeight: '700',
    fontFamily: 'Poppins-Light',
    marginLeft: 20,
  },
  author: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginLeft: 20,
    color: 'gray',
  },
  available: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Light',
    marginLeft: 20,
    color: 'green',
  },
});
