import { StyleSheet } from 'react-native';

import * as colors from '../../../../constants/colors';

const checkboxSize = 20;
const crossSize = 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center'
  },
  todoText: {
    fontWeight: 'bold'
  },
  checkbox: {
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 5,
    height: checkboxSize,
    width: checkboxSize,
    marginRight: 10
  },
  checked: {
    backgroundColor: colors.black
  },
  selected: {
    backgroundColor: colors.gray
  },
  todoRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  crossImage: {
    width: crossSize,
    height: crossSize
  }
});

export default styles;
