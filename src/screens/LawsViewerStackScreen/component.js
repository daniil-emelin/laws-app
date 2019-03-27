import React, { Component,PureComponent } from 'react';
import {
    Platform,
    Button,
    View,
    StyleSheet,
    Text,
    ScrollView,
    WebView,
    Dimensions,
    Animated,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import * as acts from './../../data';
let {width, height} = Dimensions.get('window');


export default class LawsViewerStackScreen extends React.PureComponent {


    
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'ADD_TITLE', payload: this.props.match.params.title });
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'REMOVE_LAST_TITLE' });
    }

    _renderItem = ({item}) => {
        if (item.accordion) {
            return (
                <View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <Text
                            style={styles.h3}
                            onPress={() => this.setState({ isPressed: !this.state.isPressed })}>{`${item.text.replace(/&quot;/,"\"")}`}</Text>
                        <Image
                            style={[styles.icon, (!this.state.isPressed) ? { transform: [{ rotateZ: '90deg' }] } : { transform: [{ rotateZ: '-90deg' }] }]}
                            source={require('../../images/arrowRight.png')} />
                    </View>
                    <Text
                        style={[(this.state.isPressed) && styles.textMore]}
                    >
                        {(this.state.isPressed) && item.accordion}
                    </Text>
                </View>
            );
        }

        else {
            return(
            <Text
                style={
                    [
                        item.type == 'h2' && styles.h2,
                        item.type == 'h4' && styles.h4,
                        item.type == 'h5' && styles.h5,
                        item.type == 'p' && styles.p,
                        item.type == 'footer1' && styles.footer_1,
                        item.type == 'footer2' && styles.footer_2,
                    ]
                }>{item.text}</Text>
            );
        }
    }

    render() {
        const { base } = this.props;
        const { params } = this.props.match;

        return (
            <FlatList
                data={acts['act'+params.actid]}
                extraData={this.state}
                renderItem={this._renderItem}
                keyExtractor={(item, index)=>index}
                style={styles.container} 
                />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 17,
    },
    icon:{
        width: 25,
        height: 25,
        tintColor: 'rgb(166,198,215)'
    },
    textMore:{
        fontSize: 13,
        color: 'rgb(143,142,148)',
        lineHeight: 20,
        paddingBottom: 24
    },
    h2: {
        paddingTop: 25,
        paddingBottom: 16,
        fontSize: width/22,
        lineHeight: width/20,
        color: 'rgb(45,113,148)',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    h3: {
        width: 0.7*width,
        fontSize: width/24,
        textAlign: 'left',
        color: 'rgb(71,84,89)',
        lineHeight: width/20,
        textAlign: 'left',
        paddingBottom: 24
    },
    h4: {
        fontSize: width/24,
        lineHeight: width/20,
        paddingBottom: 24,
        fontWeight: 'bold',
        color: 'rgb(51,51,51)'
    },
    h5: {
        fontSize: width/22,
        color: 'rgb(51,51,51)',
        fontWeight: 'bold',
        paddingBottom: 8
    },
    p: {
        fontSize: width/25,
        lineHeight: width/21,
        color: 'rgb(51,51,51)',
        textAlign: 'left',
        paddingBottom: 24,
        paddingTop: 5
    },
    footer_1: {
        fontSize: 14,
        color: 'rgb(71,84,89)',
        textAlign: 'left',
        fontWeight: '500',
        paddingBottom: 15
    },
    footer_2: {
        fontSize: 14,
        color: 'rgb(122,122,122)',
        textAlign: 'left',
        paddingBottom: 26
    },
    moreText: {
        fontSize: width/28,
        lineHeight: width/21,
        color: 'rgb(143,142,148)',
        textAlign: 'left'
    }
});