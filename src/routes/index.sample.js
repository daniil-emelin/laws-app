import React, { Component } from 'react';
import { StackNavigator, TabNavigator, Header } from 'react-navigation';
import { View, Image, StyleSheet } from 'react-native';
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
    ContactsStackScreen
} from './../screens';

const KnowledgeBaseStackNavigation = StackNavigator({
    KnowledgeBase: { screen: KnowledgeBaseTabScreen },
    Licensing: {
        screen: LicensingStackScreen, 
        navigationOptions: {
            tabBarVisible: false
        }
    },
    LicensingLaws: {
        screen: LicensingLawsStackScreen, 
        navigationOptions: {
            tabBarVisible: false
        }
    },
    LawsViewer: {
        screen: LawsViewerStackScreen, 
        navigationOptions: {
            tabBarVisible: false
        }
    }
}, {
        cardStyle: {
            backgroundColor: 'transparent'
        },
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: 'transparent'
            },
          
        }),
    });

const InspectorStackNavigation = StackNavigator({
    Inspector: { screen: InspectorTabScreen },
    Inspector_Test: {
        screen: InspectorStackScreen, 
        navigationOptions: {
            tabBarVisible: false
        }
    },
    Questions: {
        screen: QuestionsStackScreen, 
        navigationOptions: {
            tabBarVisible: false
        }
    }
    }, {
    cardStyle: {
        backgroundColor: 'transparent'
    },
    transitionConfig: () => ({
        containerStyle: {
            backgroundColor: 'transparent'
        }
    })
});

const ExpertsStackNavigation = StackNavigator({
    Experts: { screen: ExpertsTabScreen },
    Expert: {
        screen: ExpertStackScreen, 
        navigationOptions: {
            tabBarVisible: false
        }
    }
}, {
    cardStyle: {
        backgroundColor: 'transparent'
    },
    transitionConfig: () => ({
        containerStyle: {
            backgroundColor: 'transparent'
        },
        
    })
});

const ContactsStackNavigation = StackNavigator({
    Contacts: { screen: ContactsTabScreen },
    ContactsInfo: {
        screen: ContactsStackScreen, 
        navigationOptions: {
            tabBarVisible: false
        }
    }
}, {
    cardStyle: {
        backgroundColor: 'transparent'
    },
    transitionConfig: () => ({
        containerStyle: {
            backgroundColor: 'transparent'
        }
    }),   
});

const MainTabNavigator = TabNavigator({
    Tab1: { screen: KnowledgeBaseStackNavigation },
    Tab2: { screen: InspectorStackNavigation },
    Tab3: { screen: ExpertsStackNavigation },
    Tab4: { screen: ContactsStackNavigation },
},
{
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        upperCaseLabel: false,
        indicatorStyle: {
            backgroundColor: 'white',
        },
        showIcon: true,
        tabStyle: {
            height: 49,
            padding: 0,
            margin: 0
        },
        iconStyle: {
            margin: 0,
            padding: 0
        },
        activeTintColor: 'rgb(77,141,176)',
        inactiveTintColor: 'rgb(201,220,231)',
        labelStyle: {
            fontSize: 10,
            letterSpacing: 0.1,
            marginTop: 0,
            padding: 0
        },
        style: {
            backgroundColor: 'white',
            height: 49
        },
    },
});

export default MainTabNavigator;
// export default KnowledgeBaseStackNavigation;