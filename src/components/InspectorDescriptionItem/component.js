import React, { Component } from 'react';
import {
    Platform,
    Button, 
    View, 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux'
import {
  InspectorListItem,
  AttentionInspectorItem,
  CheckListsItem
} from './../../components/';

export default class InspectorDescriptionItem extends Component {
  render() {
    return (
      <View>
        <AttentionInspectorItem />
        <View style={styles.border} />
        <CheckListsItem />
        <View style={styles.border} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border:{
    height:10,
    paddingLeft:0,
    backgroundColor:"rgb(242, 246, 249)"
  }
});