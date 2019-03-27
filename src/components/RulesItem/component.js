import React, { Component } from 'react';
import {
    Platform,
    View, 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image
} from 'react-native';


export default class RulesItem extends Component {
  render() {
    return (
        <View style={styles.rulesWrapper}>
            <View style={{
                width: 13,
                height: 13,
                backgroundColor: this.props._answer ? 'rgb(61, 184, 120)' : 'rgb(244, 111, 95)',
                borderRadius: 7,
                marginTop: 4
            }}/>
            <Text style={styles.textRules}>{this.props.name}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    rulesWrapper: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 11
    },
    textRules: {
        fontSize: 15,
        textAlign: 'left',
        lineHeight: 20, 
        color: 'rgb(143, 142, 148)', 
        paddingLeft: 17
    },
});