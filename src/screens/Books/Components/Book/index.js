import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Book extends React.Component {
  navigation = () => {
    this.props.navigate('Book', { bookId: this.props.book.id });
  };

  render() {
    const { book } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.navigation}>
        {book.image_url ? (
          <Image source={{ uri: book.image_url }} style={styles.image} />
        ) : (
          <View style={styles.nullImage} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }),
  navigate: PropTypes.func
};

export default Book;
