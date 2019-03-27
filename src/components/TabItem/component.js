import React, { Component,PureComponent } from 'react';
import { View, Image, StyleSheet, Text, Platform } from 'react-native';
import { Link } from 'react-router-native'
import images from './images';

export default class TabItem extends React.Component {

    render() {
        return (
            <Link to={this.props.to} style={styles.tabWrapper}  underlayColor="transparent">
                <View style={styles.tabElem}>
                    <Image
                        source={images.icons[this.props.icon]}
                        style={[styles.tabIcon,this.props.customStyle]}
                    />
                    <Text style={[styles.tabLabel,this.props.labelStyle]}>{this.props.label}</Text>
                </View>
            </Link>
        )
    }

}
const styles = StyleSheet.create({
    tabWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    tabElem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    tabIcon: {
        marginBottom: Platform.OS === 'android' ? 2.5 : 1,
        width: Platform.OS === 'android' ? 22.5 : 25,
        height: Platform.OS === 'android' ? 22.5 : 25,
        tintColor: 'rgb(201,220,231)'
    },
    tabLabel: {
        textAlign: 'center',
        fontSize: 10,
        color: 'rgb(201,220,231)'
    }
});