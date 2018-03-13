import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import BookImage from '../../../../Components/BookImage';

import styles from './styles';

class Book extends React.Component {
  navigation = () => {
    this.props.navigate('Book', { bookId: this.props.book.id });
  };

  render() {
    const { book } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.navigation}>
        <BookImage url={book.image_url} />
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
