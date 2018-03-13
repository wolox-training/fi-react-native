import { StyleSheet } from 'react-native';

import * as colors from '../../constants/colors';

const bookSize = 100;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: bookSize,
    height: bookSize,
    borderRadius: bookSize
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 15
  },
  light: {
    fontWeight: '100'
  },
  nullImage: {
    width: bookSize,
    height: bookSize,
    borderRadius: bookSize,
    backgroundColor: colors.gray
  },
  bookHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginBottom: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray
  }
});

export default styles;
