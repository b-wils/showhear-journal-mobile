/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

// views
import Home from './views/home'
import CheckinInit from './views/checkin-init'

class App extends React.Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene key="home" initial={true} component={Home}/>
                <Scene key="checkinInit" component={CheckinInit}/>
            </Scene>
        </Router>
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
