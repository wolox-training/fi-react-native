import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BookImage = ({ url }) =>
  url ? <Image source={{ uri: url }} style={styles.image} /> : <View style={styles.nullImage} />;

BookImage.propTypes = {
  url: PropTypes.string
};

export default BookImage;
