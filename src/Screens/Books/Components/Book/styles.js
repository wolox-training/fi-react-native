import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 15
  },
  textContainer: {
    marginLeft: 20
  },
  nullImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#DDD'
  }
});

export default styles;