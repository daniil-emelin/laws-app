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
import {Link} from 'react-router-native';

export default class InspectorListItem extends Component {
  render() {
    return (
        <Link 
          style={styles.container}
          onPress={this.props._onPress}
          disabled={this.props._disabled}
          to={this.props.to}
          underlayColor='transparent'
        >
          <View style={styles.wrapper}>
            <View style={styles.testImg1}>
              {/* <Image 
                source={{uri: this.props.uri1}}
                style={{width: 45, height: 45, tintColor: 'rgb(222,213,205)'}}
              /> */}
            </View>
            <View style={styles.testName}>
              <Text style={styles.testNameText}>{this.props.name}</Text>
            </View>
            <View style={styles.testImg2}>
              <Image 
                source={require('./../../images/arrowRight.png')}
                style={{width: 8, height: 13, tintColor: 'rgb(166, 198, 215)'}}
              />
            </View>
          </View>
        </Link>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    paddingLeft: 17    
  },
  wrapper: {
    borderBottomColor:'rgb(202, 221, 232)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',   
    paddingRight: 17 
  },
  testName:{
    width: 261,
    marginLeft: 10,
    paddingTop: 25,
    paddingBottom: 25,
  }
});