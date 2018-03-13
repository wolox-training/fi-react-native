import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Book = ({ book }) => (
  <View style={styles.container}>
    {book.image_url ? (
      <Image source={{ uri: book.image_url }} style={styles.image} />
    ) : (
      <View style={styles.nullImage} />
    )}
    <View style={styles.textContainer}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
    </View>
  </View>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  })
};

export default Book;
