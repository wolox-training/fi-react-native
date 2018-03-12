import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';


import styles from './styles'
class Book  extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.book.image_url ?
          <Image
          source={{uri: this.props.book.image_url}}
          style={styles.image}
        />: <View style={styles.nullImage} />  }
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.book.title}</Text>
          <Text style={styles.author}>{this.props.book.author}</Text>
        </View>
      </View>
    );
  }
}

export default Book;