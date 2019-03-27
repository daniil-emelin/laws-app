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
import {
  InspectorListItem
} from './../../components/';

export default class AttentionInspectorItem extends React.Component {
   render(){
       return(
           <View style={styles.container}>
               <View style={styles.nameComponent}>
                   <View style={styles.textWrapper}>
                        <Text style={styles.textContent}>
                            Вы можете самостоятельно пройти проверку по различным направлениям деятельности образовательной организации
                            по предлагаемым проверочным листам.
                        </Text>
                   </View>
                   <Image
                       style={{ width: 50, height: 39, tintColor: 'rgb(222, 213, 205)' }}
                       source={{ uri: 'https://i.pinimg.com/originals/c3/b9/58/c3b95818a1772a1e61eb45ba8a75f52d.png' }}
                   />
               </View>
           </View>
       );
   }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    nameComponent: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingRight: 11   
    },
    textWrapper: {
      width: 277,
      paddingLeft: 17,
      paddingTop: 24,
      paddingBottom: 16
    },
    textContent:{
      color: 'rgb(71,84,89)',
      fontSize: 17,
      textAlign: 'left',
      lineHeight: 22,
    },
  });


