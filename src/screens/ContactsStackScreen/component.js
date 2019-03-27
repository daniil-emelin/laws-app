import React, { Component } from 'react';
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
    Image
} from 'react-native';
import { ContactDetailItem } from './../../components/';
import call from 'react-native-phone-call';
import email from 'react-native-email';
import openMap from 'react-native-open-maps';

export default class ContactsStackScreen extends React.Component {

    componentDidMount() {
        this.props.dispatch({ type: 'ADD_TITLE', payload: this.props.match.params.title });
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'REMOVE_LAST_TITLE' });
    }

    handleEmail = () => {
        const to = [this.props.contacts[this.props.match.params.id].email, ''];
        email(to, {
            cc: ['', ''],
            bcc: '',
            subject: '',
            body: ''
        })
    }


    render() {
        console.log(this.props);
        const { contacts } = this.props;
        const { params } = this.props.match;
        var txt = contacts[params.id].number;
        var numb = txt.match(/\d/g);
        numb = numb.join("");
        const args = {
            number: numb,
            prompt: true
        }
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, paddingTop: 17 }}>
                    <ContactDetailItem
                        key={1}
                        name={contacts[params.id].adress}
                        description={'Посмотреть на карте'}
                        onPress={() => openMap(contacts[params.id].coords)}
                        img={require('./../../images/map3x.png')}
                        brown={true}
                        alignStart={true}
                    />
                    <ContactDetailItem
                        key={2}
                        name={contacts[params.id].number}
                        description={'Позвонить'}
                        onPress={() => call(args)}
                        brown={true}
                        img={require('./../../images/phone3x.png')}
                        alignStart={true}
                    />
                    <ContactDetailItem
                        key={3}
                        name={contacts[params.id].email}
                        description={'Написать'}
                        onPress={this.handleEmail}
                        brown={true}
                        img={require('./../../images/mail3x.png')}
                        alignStart={true}
                    />
                    <ContactDetailItem
                        key={4}
                        name={contacts[params.id].workingHours}
                        description={'Время работы'}
                        borderBottom={false}
                        brown={true}
                        img={require('./../../images/time3x.png')}
                        alignStart={true}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});