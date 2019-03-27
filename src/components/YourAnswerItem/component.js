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

const {width, height} = Dimensions.get('window')

export default class YourAnswerItem extends Component {
  render() {
    return (
        <View style={styles.answerWrapper}>
            <Text style={styles.answerText}>{this.props.name}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    answerWrapper: {
        width: width/2-34,
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 6,
    },
    answerText: {
        textAlign: 'center',
        paddingVertical:15,
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 'bold',
        color: 'rgb(71, 84, 89)'
    },
});