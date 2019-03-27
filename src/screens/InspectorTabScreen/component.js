import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
  ActivityIndicator
} from 'react-native';
import {
  InspectorListItem,
  InspectorDescriptionItem,
  HeaderItem
} from './../../components/';
import img from '../../images/icon.png';

let { width, height } = Dimensions.get('window');

export default class InspectorTabScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <InspectorListItem
        key={item.Id}
        name={item.Title}
        to={`/inspector/tests/${index}/${item.Title}`}
        _disabled={this.state.disabled}
        _onPress={() => {
          this.setState({ disabled: true })
          this.props.changeSurvId(item.Id)
          setTimeout(() => {
            this.setState({ disabled: false })
          }, 2000)
        }
        }
      />
    );
  }

  componentWillMount() {
    this.props.fetchLists();
  }




  render() {
    const { tests } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderItem title='Инспектор' />
        <InspectorDescriptionItem />
        <FlatList
          data={this.props.lists}
          renderItem={this._renderItem}
          keyExtractor={item => item.Id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});