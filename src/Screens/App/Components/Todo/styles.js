import { StyleSheet } from 'react-native'

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
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    height: 20,
    width: 20,
    marginRight: 10
  },
  checked: {
    backgroundColor: '#000'
  },
  selected: {
    backgroundColor: '#999'
  },
  todoRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  crossImage: {
    width: 15,
    height: 15
  }
});

export default styles;