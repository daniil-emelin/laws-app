import React, { Component, PureComponent } from 'react';
import {
  Platform,
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import {
  ExpertsItem,
  HeaderItem
} from './../../components/';
let { width, height } = Dimensions.get('window');

export default class ExpertsTabScreen extends React.PureComponent {

  _renderItem = ({ item }) => {
    return (<ExpertsItem
      uri={item.uri}
      name={item.name}
      description={item.description}
      to={`/experts/expertinfo/${item.id}/${item.name}`}
    />
    );
  };

  _keyExtractor = (item, index) => item.name;

  render() {
    const { experts } = this.props;
    return (
      <View style={styles.wrapper}>
        <HeaderItem title='Эксперты' />
        {/* {experts && experts.map((item, index) => {
          return (
            <ExpertsItem
              key={index}
              uri={item.uri}
              name={item.name}
              description={item.description}
              to={`/experts/expertinfo/${item.id}/${item.name}`}
            />
          );
        })} */}
        <FlatList
          data={experts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          initialNumToRender={4}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgb(242,246,249)'
  }
});