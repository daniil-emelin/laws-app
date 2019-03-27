import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import {
    Button,
  } from '../';
let {width,height}=Dimensions.get('window');

export default class EndScreenCard extends Component {
    render() {
      return (
        <View style={{flex: 1}}>
            <View style={styles.wrapper}>
                <View style={styles.questionCard}>
                    <Text style={styles.title}> Проверка завершена!</Text>
                    <Text style={styles.mainText}>
                        Нажмите на кнопку, чтобы получить перечень ошибок и сформировать Акт с результатами проверки
                    </Text>
                </View>  
            </View>
        </View> 
      );
    }
  }

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgb(242, 246, 249)',
        paddingTop: 22,
        paddingBottom: 79,
        justifyContent:'center',
        alignItems:'center'
    },
    questionCard: {
        width: width-17,
        marginHorizontal: 10,
        backgroundColor: 'rgb(255,255,255)',
        height: 148,
        borderRadius: 6
    },
    title: {
        textAlign: 'center',
        paddingTop: 19,
        fontSize:17,
        lineHeight: 22,
        color:'rgb(71, 84, 89)',
        fontWeight: 'bold' 
    },
    mainText: {
        textAlign: 'center',
        paddingTop: 19,
        fontSize:17,
        lineHeight: 22,
        color:'rgb(71, 84, 89)',
    }

});