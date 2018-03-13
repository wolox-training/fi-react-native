import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
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
    color: 'red'
  },
  bodyContainer: {
    flex: 1,
    borderBottomColor: '#DDD',
    borderTopColor: '#DDD',
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
});

export default styles;
