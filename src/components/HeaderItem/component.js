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
import {HeaderTitle} from 'react-navigation';


const { width, height } = Dimensions.get('window')

export default class HeaderItem extends Component {
    render() {
        return (
            <View>
                <Image style={styles.image} resizeMode={'cover'} source={require('./../../images/background.png')}>
                </Image>
                <HeaderTitle style={styles.text}>{this.props.title}</HeaderTitle>
            </View>
        );
    }
}

const styles = StyleSheet.create({
image:{
    width,
    height: 113
},
text:{
    position:'absolute',
    bottom: 0,
    color:'white',
    fontSize: 34
}
});