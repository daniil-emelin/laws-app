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

export default class Button extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.button, 
                    {
                        width: !this.props.large ? width/2-34 : width-34,
                        alignSelf: this.props.large ? 'center' : undefined,
                    }
                ]} 
                onPress={this.props._onPress}
            >
                <Text style={styles.buttonText}>{this.props.name}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(242, 246, 249)',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8,
    },
    button: {
        backgroundColor: 'rgb(77, 141, 176)',
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        paddingTop: 17,
        paddingBottom: 16,
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 'bold',
        color: 'rgb(255,255,255)'
    },
});