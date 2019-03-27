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

export default class QuestionItem extends Component {
  render() {
    return (
        <View >
            <Text style={{
                width: width-17,
                textAlign: 'center',
                fontSize:17,
                lineHeight: 22,
                marginTop: 27,
                paddingHorizontal:5,
                color:'rgb(71, 84, 89)',
                backgroundColor: 'rgb(255,255,255)',
                paddingVertical: 23,
                fontWeight: 'bold',
                borderRadius: 6,
                marginLeft: 10,
            }}>{this.props.name.replace(/&quot;/g,"\"")}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});