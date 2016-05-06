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
import CheckinComplete from './views/checkin-complete'

class App extends React.Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene key="home"  component={Home}/>
                <Scene key="checkinInit"  initial={true} component={CheckinInit}/>
                <Scene key="checkinComplete"  component={CheckinComplete}/>
            </Scene>
        </Router>
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
