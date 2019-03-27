import React, { Component,PureComponent } from 'react';
import {
  Platform,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from 'react-native';
let { width, height } = Dimensions.get('window');
import { Link } from 'react-router-native'

export default class KnowledgeBaseItem extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
       
          <Link style={{ width: 0.7 * width }} onPress={this.props.onPress} to={this.props.to} underlayColor='white'>
            <View>
              <Text style={styles.itemHeader}>{this.props.header}</Text>
              <Text style={styles.itemDescription}>{this.props.desc}</Text>
            </View>
          </Link>

          <Image
            style={{ width: 34, height: 34, tintColor: 'rgb(146,115,90)', opacity: 0.3 }}
            source={{ uri: this.props.iconUrl }}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(192,212,222)',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  itemHeader: {
    fontSize: 24,
    color: 'rgb(45,113,148)',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  itemDescription: {
    fontSize: 17,
    color: 'rgb(51,51,51)',
    lineHeight: 22,
    textAlign: 'left'
  }
});
