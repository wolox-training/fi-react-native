import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import BooksArray from '../../../config/constants';
import * as colors from '../../constants/colors';

import Book from './Components/Book';
import styles from './styles';

class Books extends Component {
  state = {
    loading: true,
    books: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false, books: BooksArray });
    }, 3000);
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.lightBlue} />
        </View>
      );
    }
    return <ScrollView>{this.state.books.map(book => <Book key={book.id} book={book} />)}</ScrollView>;
  }
}

export default Books;
