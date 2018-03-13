import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import BookArray from '../../../config/constants';
import * as colors from '../../constants/colors';

import styles from './styles';
import Book from './layout';

class BookContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: BookArray.find(book => book.id === navigation.state.params.bookId).title
  });

  state = {
    book: null,
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        book: BookArray.find(book => book.id === this.props.navigation.state.params.bookId),
        loading: false
      });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.lightBlue} />
        </View>
      );
    }
    return <Book book={this.state.book} />;
  }
}

BookContainer.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        bookId: PropTypes.number
      })
    })
  })
};

export default BookContainer;
