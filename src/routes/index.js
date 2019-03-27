import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Platform, ImageBackground, TouchableOpacity,TouchableHighlight, PlatformIOS, Dimensions, ScrollView } from 'react-native';
import {
    KnowledgeBaseTabScreen,
    InspectorTabScreen,
    ExpertsTabScreen,
    ContactsTabScreen,
    LicensingStackScreen,
    ExpertStackScreen,
    InspectorStackScreen,
    QuestionsStackScreen,
    LicensingLawsStackScreen,
    LawsViewerStackScreen,
    ContactsStackScreen,
    ExampleScreen
} from './../screens';
import { HeaderTitle } from 'react-navigation'
import { Navigation, Card } from 'react-router-navigation';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import KnowledgeBaseItem from '../components/KnowledgeBaseItem/component';
import { Switch, Route, Redirect, Router } from 'react-router';
import { TabItem, AgainButton } from './../components';
let { width, height } = Dimensions.get('window');


const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})



_renderNav = (withRouter(connect(mapStateToProps)((props,title) => {
    const {appReducer} = props;
    const titles = appReducer.titles;
    return (
        <ImageBackground
            style={styles.wrapperSmall}
            source={require('./../images/background.png')}
        >
            <TouchableOpacity style={styles.goBackBtn} 
                onPress={() => {
                    props.history.goBack();
                    // props.dispatch({ type: 'REMOVE_LAST_TITLE' });
                }}
            >
                <Image style={styles.backIcon} source={require('./../images/page.png')}></Image>
            </TouchableOpacity>
            <HeaderTitle style={styles.smallTitle}>{titles[titles.length - 1]}</HeaderTitle>
        </ImageBackground>
    );
})));

_renderNavWithAgain = withRouter((props) => {
    return (
        <ImageBackground
            style={[styles.wrapperSmall, { justifyContent: /* 'flex-start' */'space-between'}]}
            source={require('./../images/background.png')}
        >
            <TouchableOpacity style={styles.goBackBtn} onPress={props.history.goBack}>
                <Image style={styles.backIcon} source={require('./../images/page.png')}></Image>
            </TouchableOpacity>
            <HeaderTitle style={[styles.altSmallTitle,{paddingLeft: 60} ]}>Инспектор</HeaderTitle>
            <AgainButton
                /* _onPress={() => {
                    props.history.changeState(); dispatch isCLear: = true
                }} */
            />
        </ImageBackground>
    );
})

class KnowledgeStackNavigator extends React.Component {



    render() {
        const { match: { url } } = this.props
        return (
            <Navigation
                backButtonTintColor="white"
                cardStyle={Platform.OS=='android' && styles.card}
            >
                <Card
                    exact
                    path={url}
                    hideNavBar={true}
                    // navBarStyle={Platform.OS=='ios'?{height:110, backgroundColor:'transparent'}:{}}
                    // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                    //     <HeaderTitle style={styles.bigTitle}>{'База знаний'}</HeaderTitle>
                    // ))}
                    render={(props) => (
                        <KnowledgeBaseTabScreen
                            {...props}
                        />
                    )}
                />

                <Card
                    path={`${url}/licensing/:id/:brownheader/:title`}
                    render={(props) => (
                        <LicensingStackScreen
                            {...props}
                        />
                    )}
                    // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                    renderNavBar={_renderNav}
                    // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                    //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
                    //   ))}
                />

                <Card
                    path={`${url}/acts/:id/:typeid/:title`}
                    render={(props) => (
                        <LicensingLawsStackScreen
                            {...props}
                        />
                    )}
               // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
               renderNavBar={_renderNav}
               // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
               //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
               //   ))}
                />

                <Card
                    path={`${url}/view_act/:id/:typeid/:actid/:title`}
                    render={(props) => (
                        <LawsViewerStackScreen
                            {...props}
                        />
                    )}
                    // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                    renderNavBar={_renderNav}
                    // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                    //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
                    //   ))}
                />


            </Navigation>
        )
    }
}

class InspectorStackNavigator extends React.Component {
    render() {
        const { match: { url } } = this.props
        return (
            <Navigation
                backButtonTintColor="white"
                
            >
                <Card
                   exact
                    path={url}
                    hideNavBar={true}
                    // navBarStyle={Platform.OS=='ios'?{height:110, backgroundColor:'transparent'}:{}}
                    render={props => (
                        <InspectorTabScreen
                            {...props}
                        />
                    )}
                    // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                    //     <HeaderTitle style={styles.bigTitle}>{'База знаний'}</HeaderTitle>
                    //   ))}
                />

                <Card
                    path={`${url}/tests/:id/:title`}
                    render={(props) => (
                        <InspectorStackScreen
                            {...props}
                        />
                    )}
                     // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                     renderNavBar={_renderNav}
                     // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                     //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
                     //   ))}
                />

                <Card
                    path={`${url}/quest/:id/:questid`}
                    render={props => (
                        <QuestionsStackScreen
                            {...props}
                        />
                    )}
                   // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                   renderNavBar={_renderNavWithAgain}
                   // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                   //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
                   //   ))}
                />

            </Navigation>
        )
    }
}


class ExpertsStackNavigator extends React.Component {
    render() {
        const { match: { url } } = this.props
        return (
            <Navigation
                backButtonTintColor="white"

            >
                <Card
                  exact
                  path={url}
                  hideNavBar={true}
                //   navBarStyle={Platform.OS=='ios'?{height:110, backgroundColor:'transparent'}:{}}
                    render={props => (
                        <ExpertsTabScreen
                            {...props}
                        />
                    )}
                   // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                   renderNavBar={_renderNav}
                   // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                   //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
                   //   ))}
                />

                <Card
                    path={`${url}/expertinfo/:id/:title`}
                    render={props => (
                        <ExpertStackScreen
                            {...props}
                        />
                    )}
                   // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                   renderNavBar={_renderNav}
                   // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                   //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
                   //   ))}
                />
            </Navigation>
        )
    }
}

class ContactsStackNavigator extends React.Component {

    render() {
        const { match: { url } } = this.props
        return (
            <Navigation
                backButtonTintColor="white"
            >
                <Card
                    exact
                    path={url}
                    hideNavBar={true}
                    // navBarStyle={Platform.OS=='ios'?{height:110, backgroundColor:'transparent'}:{}}
                    render={props => (
                        <ContactsTabScreen
                            {...props}
                        />
                    )}
                    // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                //    renderNavBar={_renderNav}
                    // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                    //     <HeaderTitle style={styles.bigTitle}>{'База знаний'}</HeaderTitle>
                    //   ))}
                />

                <Card
                    path={`${url}/contactinfo/:id/:title`}
                    render={props => (
                        <ContactsStackScreen
                            {...props}
                        />
                    )}
                  // navBarStyle={Platform.OS=='ios'?{height:60, backgroundColor:'transparent'}:{}}
                  renderNavBar={_renderNav}
                  // renderTitle={Platform.OS=='ios' &&  (({ match }) => (
                  //     <HeaderTitle style={styles.title}>{match && match.params.title}</HeaderTitle>
                  //   ))}
                />

            </Navigation>
        )
    }
}


export default class MainTabNavigator extends React.Component {

    render() {
        return (
            <View style={styles.flexWrapper}>
                <Switch>
                    <Route path={'/knowledge'} component={KnowledgeStackNavigator} />
                    <Route path={`/inspector`} component={InspectorStackNavigator} />
                    <Route path={`/experts`} component={ExpertsStackNavigator} />
                    <Route path={`/contacts`} component={ContactsStackNavigator} />
                </Switch>
                {this.props.history.location.pathname.length <= 10 &&
                    <View style={styles.tabBar}>
                        <Link to={'/knowledge'} style={styles.tabWrapper} underlayColor="transparent">
                            <View style={styles.tabElem}>
                                <Image
                                    source={require('./../images/base.png')}
                                    style={[styles.tabIcon, { tintColor: (this.props.history.location.pathname == '/knowledge') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}
                                />
                                <Text style={[styles.tabLabel, { color: (this.props.history.location.pathname == '/knowledge') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}>База знаний</Text>
                            </View>
                        </Link>

                        <Link to={'/inspector'} style={styles.tabWrapper} underlayColor="transparent">
                            <View style={styles.tabElem}>
                                <Image
                                    source={require('./../images/inspectorCopy.png')}
                                    style={[styles.tabIcon, { tintColor: (this.props.history.location.pathname == '/inspector') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}
                                />
                                <Text style={[styles.tabLabel, { color: (this.props.history.location.pathname == '/inspector') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}>Инспектор</Text>
                            </View>
                        </Link>

                        <Link to={'/experts'} style={styles.tabWrapper} underlayColor="transparent">
                            <View style={styles.tabElem}>
                                <Image
                                    source={require('./../images/expertsCopy.png')}
                                    style={[styles.tabIcon, { tintColor: (this.props.history.location.pathname == '/experts') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}
                                />
                                <Text style={[styles.tabLabel, { color: (this.props.history.location.pathname == '/experts') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}>Эксперты</Text>
                            </View>
                        </Link>

                        <Link to={'/contacts'} style={styles.tabWrapper} underlayColor="transparent">
                            <View style={styles.tabElem}>
                                <Image
                                    source={require('./../images/contactsCopy.png')}
                                    style={[styles.tabIcon, { tintColor: (this.props.history.location.pathname == '/contacts') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}
                                />
                                <Text style={[styles.tabLabel, { color: (this.props.history.location.pathname == '/contacts') ? 'rgb(77,141,176)' : 'rgb(201,220,231)' }]}>Контакты</Text>
                            </View>
                        </Link>


                    </View>
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    tabBar: {
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
        flex: 0.1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderTopColor: 'rgb(236,236,236)',
        borderTopWidth: 1
    },
    navBar: {
        height: 112,
        backgroundColor: '#2d7195'
    },
    wrapper: {
        width: null,
        height: 108,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        paddingTop: Platform.OS === 'ios' ? 0 : 24,
        justifyContent: 'flex-end'

    },
    wrapperSmall: {
        width: width,
        height: (Platform.OS === 'ios' && height === 812) ? 84 : 64,
        backgroundColor: 'transparent',
        paddingTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    smallTitle: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        width: 0.7 * width
    },
    altSmallTitle: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    bigTitle: {
        color: 'white',
        fontSize: 34,
        textAlign: 'left',
        fontWeight: '500',
        paddingLeft: 15,
        position: 'absolute',
        bottom: 0
    },
    backIcon: {
        width: 10,
        height: 18
    },
    flexWrapper: {
        flex: 1,
    },
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
    },
    tabLabel: {
        textAlign: 'center',
        fontSize: 10,
    },
    goBackBtn: {
        padding: 20
    },
    title:{
        color:'white'
    },
    card:{
        backgroundColor: 'transparent'
    }
})