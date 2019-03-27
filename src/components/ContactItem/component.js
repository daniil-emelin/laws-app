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
import { Link } from 'react-router-native'
let {width,height}=Dimensions.get('window');

export default class ContactItem extends React.PureComponent {

    render() {
        return (
            <Link style={styles.container} onPress={this.props.onPress} to={this.props.to} underlayColor='white' disabled={this.props.disableds}>
                <View style={styles.wrapper}>
                    <Image  style={styles.contactImg}
                            source={{ uri: this.props.logo }} />
                    <View style={styles.textWrapper}>
                        <Text style={styles.contactItemText}>{this.props.name}</Text>
                    </View>
                    <Image  style={styles.arrowImg}
                            source={require('./../../images/arrowRight.png')} />
                </View>
            </Link>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 17,
        borderStyle: 'solid',
        backgroundColor: 'white'
    },
    textWrapper:{
        width: 0.6*width,
        paddingLeft: 15,
    },
    wrapper: {
        height: 90,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(202,221,232)',
    },
    contactItemText: {
        fontSize: 16,
        textAlign: 'left',
        color: '#515151',
        lineHeight: 20,
        fontWeight: '400'
    },
    contactImg: {
        width: 40,
        height: 40,
    },
    arrowImg: {
        width: 20,
        height: 20,
        tintColor: 'rgb(166,198,215)'
    }
});
