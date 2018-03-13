import { StyleSheet } from 'react-native';

import * as colors from '../../constants/colors';

const bookSize = 100;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20
  },
  image: {
    width: bookSize,
    height: bookSize,
    borderRadius: bookSize
  },
  nullImage: {
    width: bookSize,
    height: bookSize,
    borderRadius: bookSize,
    backgroundColor: colors.gray
  }
});

export default styles;
