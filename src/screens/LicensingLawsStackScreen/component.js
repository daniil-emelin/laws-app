import React, { Component,PureComponent } from 'react';
import {
  Platform,
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  WebView,
  Dimensions,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { LicensingLawsItem } from './../../components/';



export default class LicensingLawsStackScreen extends React.PureComponent {

  _renderItem = ({ item,index }) => {
    const { base } = this.props;
    const { params } = this.props.match;
    return (
      <LicensingLawsItem
        name={`${item.title.replace(/&quot;/g,"\"")}`}
        description={item.description}
        img={require('./../../images/icon.png')}
        to={`/knowledge/view_act/${params.id}/${params.typeid}/${item.id}/${item.description}`}
        borderBottom={true}
        onPress={()=>{
          this.props.history.title=item.title;
        }}
      />
    );
  }


  componentDidMount() {
    this.props.dispatch({ type: 'ADD_TITLE', payload: this.props.match.params.title });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: 'REMOVE_LAST_TITLE' });
  }

  _keyExtractor = (item, index) => index; 

  render() {
    const { base } = this.props;
    const { params } = this.props.match;
    return (
      <View style={styles.container}>

        <View style={{ height: 25, backgroundColor: 'white' }} />

        <FlatList
          data={base[params.id].types[params.typeid].norm_acts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          // initialNumToRender={4}
        />

        {/* {base[parseInt(params.id)].types[parseInt(params.typeid)].norm_acts && base[parseInt(params.id)].types[parseInt(params.typeid)].norm_acts.map((item, key) => (
          <LicensingLawsItem
            key={key}
            name={item.title}
            description={item.description}
            img={require('./../../images/icon.png')}
            to={`/knowledge/view_act/${params.id}/${params.typeid}/${item.id}/${item.description}`}
            borderBottom={true}
          />
        ))} */}


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