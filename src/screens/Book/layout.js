import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import BookImage from '../../Components/BookImage';

import styles from './styles';

const BookLayout = ({ book }) => (
  <View style={styles.container}>
    <View style={styles.bookHeader}>
      <BookImage url={book.image_url} />
      <View>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.subtitle}>{book.author}</Text>
        <Text style={[styles.subtitle, styles.light]}>{book.genre}</Text>
      </View>
    </View>
    <Text>
      Locked in Time is a 1985 suspense novel by Lois Duncan. The story centers around Nore, a
      seventeen-year-old girl who moves into a new home during the summer with her father Chuck, stepmother
      Lisette, stepbrother Gabe, and stepsister Josie. Soon after she meets her stepmother, stepbrother, and
      stepsister for the first time, Nore begins to suspect something is not quite right about her stepfamily
      and later discovers they never age. Duncan says she developed the idea for the novel when one of her
      daughters was thirteen years old and was having issues with her body image. Duncan says her daughter was
      on her, and she began to wonder what it would be like if her daughter never outgrew her adolescence.
    </Text>
  </View>
);

BookLayout.propTypes = {
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

export default BookLayout;
