import React, { Component } from 'react';
import { 
  Platform,
  Button, 
  View, 
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';

export default class CheckListsItem extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.checkLists}>
                    <Text style={styles.textCheckLists}>Проверочные листы</Text>
                </View>
            </View>
        );
    }
 }
 
 const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    border:{
      height:10,
      paddingLeft:0,
      backgroundColor:"rgb(242, 246, 249)"
    },
    checkLists:{
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 10,
      paddingLeft: 17,
      paddingTop: 12,
      paddingBottom: 12
    },
    textCheckLists:{
      color: 'rgb(51,51,51)',
      fontWeight: '700',
      fontSize: 18
    },
  });