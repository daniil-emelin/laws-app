import React, { Component,PureComponent } from 'react';
import {
    Platform,
    Button, 
    View, 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { Link } from 'react-router-native';
let {width,height} = Dimensions.get('window');

export default class ExpertsItem extends PureComponent {
  render() {
    return (
            <View to={this.props.to}
            style={styles.wrapper} 
            underlayColor='white'
            >
                    <Image
                        source={{uri:this.props.uri}}
                        style={styles.img}
            />
            <Link to={this.props.to} underlayColor='transparent'>
                <Text style={styles.name}>{this.props.name}
                    <Text style={{
                        color: 'grey',
                        fontSize: 11,
                        paddingRight: 36,
                    }}>{`\n${this.props.description}`}</Text>

                </Text>
            </Link>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 17,
        borderBottomColor:'rgb(202, 221, 232)',
        borderBottomWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    img:{
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    textWrapper:{
        paddingLeft: 17
    },
    name:{
        fontSize: 16,
        textAlign: 'left',
        color: 'rgb(51,51,51)',
        paddingLeft: 15,
        paddingRight: 10,
        fontWeight: 'bold',
        width: 0.5*width

    },
});