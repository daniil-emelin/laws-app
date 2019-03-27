import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text, 
} from 'react-native';


export default class TestSuccessfulItem extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.headerText}>Результаты проверки</Text>
            </View>
            <View style={styles.successTextWrapper}>
              <Text style={styles.successText}>Нарушений не выявлено</Text>
            </View>
            <View style={styles.descriptionTextWrapper}>
              <Text style={styles.descriptionText}>В ходе проверки соблюдения обязательных требований, предъявляемых к структуре официального сайта образовательной организации в информационно-телекоммуникационной сети «Интернет» и формату представления на нем информации, утвержденных приказом Федеральной службы 
                по надзору в сфере образования 
                и науки от 29 мая 2014 г. № 785.</Text>
            </View>
        </View> 
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 28,
    color: 'rgb(45,113,148)',
    paddingLeft: 17,
    paddingTop: 24,
    paddingBottom:12
  },
  successTextWrapper: {
    backgroundColor: 'rgb(242, 246, 249)'
  },
  successText: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20,
    color: 'rgb(45,113,148)',
    paddingLeft: 17,
    paddingVertical: 14
  },
  descriptionText: {
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 22,
    color: 'rgb(71, 84, 89)',
    paddingLeft: 17,
    paddingTop: 17
  }

});