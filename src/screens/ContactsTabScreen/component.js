import React, { Component } from 'react';
import {
  Platform,
  Button,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import img from '../../images/icon.png';
import { ContactItem, HeaderItem } from './../../components';
import container from '../LicensingStackScreen/container';
let { width, height } = Dimensions.get('window');
export default class ContactsTabScreen extends React.Component {


  constructor(props){
    super(props);
    this.state={
      disabled:false
    }
  }

  _renderItem = ({ item }) => (
    <ContactItem
      logo={item.uri}
      name={item.name}
      disabled={this.state.disabled}
      onPress={()=>{
        this.setState({disabled:true});
        setTimeout(() => {
        this.setState({disabled:false})
        }, 1000);
      }}
      to={`contacts/contactinfo/${item.id}/${item.name}`}
    />
  );

  _keyExtractor = (item, index) => item.name;

  render() {
    const { params } = this.props.match;
    const { contacts } = this.props;
    return (
      <View style={styles.container}>
        <HeaderItem title='Контакты' />
        <View style={{ height: 25, backgroundColor: 'white' }} />
        <FlatList
          data={contacts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          initialNumToRender={3}
        />

      {/* {contacts && contacts.map((item,index)=>{
        return(
          <ContactItem
          key={index}
          logo={item.uri}
          name={item.name}
          disabled={this.state.disabled}
          onPress={()=>{
            this.setState({disabled:true});
            setTimeout(() => {
            this.setState({disabled:false})
            }, 1000);
          }}
          to={`contacts/contactinfo/${item.id}/${item.name}`}
        />
        )
      })} */}

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242,246,249)',
  }
});