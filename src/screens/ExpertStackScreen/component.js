import React, { Component } from 'react';
import { 
  Platform,
  View, 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
    Button,
  } from './../../components/';
import experts from '../../reducers/experts';
import email from 'react-native-email';
let {width,height}=Dimensions.get('window');


export default class ExpertStackScreen extends React.Component {
  handleEmail = () => {
    const to = [this.props.experts[this.props.match.params.id].email, ''];
    email(to, {
        cc: ['', ''],
        bcc: '',
        subject: '',
        body: ''
    })
}

componentDidMount() {
    this.props.dispatch({ type: 'ADD_TITLE', payload: this.props.match.params.title });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: 'REMOVE_LAST_TITLE' });
  }

  render() {
    const { params } = this.props.match;
    const { experts } = this.props;
    return (
      <View style={styles.container}>
        <Image 
            style={styles.img} 
            source={{uri: experts[params.id].uri}} 
        />
        <View style={styles.textWrapper}>
            <Text style={styles.textName}>{experts[params.id].firstName}</Text>
            <Text style={styles.textName}>{experts[params.id].lastName}</Text>  
        </View>
        <View style={styles.border}/>
        <View style={styles.textWrapper}>
            <Text style={styles.textName2}>{experts[params.id].description}</Text> 
        </View>

<View style={{position: 'absolute', bottom:0}}>   
        <Button
            large={true} 
            name='Написать письмо' 
            _onPress={this.handleEmail}
        />
</View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    img: {
        width: 103,
        marginTop: 32,
        height: 103,
        borderRadius: 51.5
    },
    textWrapper:{
        paddingTop: 10,
    },
    textName:{
        width: 241,
        textAlign:'center',
        fontSize: 18,
        lineHeight: 22,
        color: 'rgb(45, 113, 148)',
        fontWeight: 'bold'
    },
    textName:{
        width: 241,
        textAlign:'center',
        fontSize: 18,
        lineHeight: 22,
        color: 'rgb(45, 113, 148)',
        fontWeight:'bold'
    },
    textName2:{
        width: 241,
        textAlign:'center',
        fontSize: 18,
        lineHeight: 22,  
        marginBottom: 10
    },
    border: {
        width: 99,
        height: 1,
        backgroundColor: 'rgb(202, 221, 232)',
        marginTop: 19,
        marginBottom: 12
    },
    buttonContainer:{
        width:375,
        height: 172,
        backgroundColor: "rgb(242, 246, 249)"
    },
    btnNext: {
        width: 341,
        backgroundColor: 'rgb(77, 141, 176)',
        borderRadius: 6,
        alignSelf: 'center',
        marginTop: 27,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 17,
        paddingBottom: 16,
    }
});