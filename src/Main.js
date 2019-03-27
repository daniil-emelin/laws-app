import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import MainTabNavigator from './routes';
import store from './store';
import { Switch, Route, Router, Redirect } from 'react-router'
import { NativeRouter} from 'react-router-native'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'
import createHistory from 'history/createMemoryHistory';
const history = createHistory();
let {width,height}=Dimensions.get('window');

export default class Main extends Component {


constructor(props){
super(props);
this.state={
isMounted:false
};
}

componentDidMount(){
this.setState({
  isMounted: true
})
}

  render() {
  if (this.state.isMounted==false){
  return (
  <ImageBackground source={require('./images/splash.png')} resizeMode="cover" style={{width,height}}></ImageBackground>
  )
  }
  else {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/knowledge" />} />
            <Route
              path="/"
              render={({ location, match: { url } }) => (
                <View style={styles.container}>
                  <StatusBar
                    backgroundColor="transparent"
                    translucent
                    barStyle="light-content"
                  />
                  <MainTabNavigator history={history} />
                </View>
              )}
            />
          </Switch>
      </Router>
      </Provider>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

