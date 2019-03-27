import React, { PureComponent,Component } from 'react';
import {
    Platform,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

export default class ContactDetailItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ backgroundColor: 'white' }} underlayColor='white'>
                <View style={styles.wrapper}>
                    <View style={[styles.licensingItem, (this.props.alignStart)? {alignItems: 'flex-start'}: { alignItems: 'center'},  (this.props.borderBottom) && { borderBottomWidth: 1, borderBottomColor: 'rgb(202,221,232)' } ]}>
                        <Image style={(this.props.brown)?{width: 25,height: 25,tintColor: 'rgb(146,115,90)',resizeMode: 'contain'} :styles.iconStyle} source={this.props.img} />
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 30 }}>
                            <Text style={styles.header}>{this.props.name}</Text>
                            <Text style={styles.description}>{this.props.description}</Text>
                        </View>
                        <Image style={styles.iconStyle} source={(this.props.arrow) && require('./../../images/arrowRight.png')} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    licensingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    header: {
        fontSize: 17,
        textAlign: 'left',
        color: 'rgb(71,84,89)',
        fontWeight: '500'
    },
    description: {
        fontSize: 13,
        color: 'rgb(143,142,148)',
        textAlign: 'left'
    },
    iconStyle: {
        width: 25,
        height: 25,
        tintColor: 'rgb(166,198,215)',
        resizeMode: 'contain'
    },
    wrapper: {
        paddingLeft: 17,
    }
});
