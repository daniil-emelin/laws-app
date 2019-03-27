import React, { Component,PureComponent } from 'react';
import {
    Platform,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    Dimensions
} from 'react-native';
let {width,height} = Dimensions.get('window');
import { Link } from 'react-router-native'

export default class LicensingStackScreenItem extends React.PureComponent {
    render() {
        return (
            <Link onPress={this.props.onPress} to={this.props.to} underlayColor="white">
                <View style={[styles.licensingItem, (this.props.borderTop) ? { borderTopWidth: 1, borderTopColor: 'rgb(202,221,232)' } : {}]}>
                    <Text style={styles.licensingItemText}>{this.props.name}</Text>
                    <Image style={styles.iconStyle} source={require('./../../images/arrowRight.png')} />
                </View>
            </Link>
        );
    }
}

const styles = StyleSheet.create({
    licensingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(202,221,232)',
    },
    licensingItemText: {
        width: 0.7*width,
        fontSize: 17,
        textAlign: 'left',
        color: 'rgb(71,84,89)',
    },
    iconStyle: {
        width: 25,
        height: 25,
        tintColor: 'rgb(166,198,215)'
    }
});
