import { StyleSheet } from 'react-native';

import * as colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    height: 50,
    marginBottom: 10,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: colors.white,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    paddingVertical: 5,
    borderWidth: 0
  },
  removeButton: {
    padding: 10,
    alignItems: 'center'
  },
  removeText: {
    color: colors.red
  },
  bodyContainer: {
    flex: 1,
    borderBottomColor: colors.gray,
    borderTopColor: colors.gray,
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
});

export default styles;
