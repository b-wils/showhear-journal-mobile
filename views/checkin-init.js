import React, {View, Text, StyleSheet, TouchableHighlight, ListView} from 'react-native'
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

const MAX_LOCATIONS = 8;
var testLocations = ['Mohawk', 'Cheer up Charlies', 'Barracuda', 'Sidewinder', 'Empire Control Room', "Stubb's"];

var REQUEST_URL = 'http://localhost:5000/api/venues/search';

export default class CheckinInit extends React.Component {

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(testLocations)
    };
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Are you at?
        </Text>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderVenue}
            style={styles.listView}
          />
        </View>
      </View>
    );
  }

  renderVenue(venue) {
    return (
      <LocationButton name={venue} key={venue}/>
    );
  }

}

class LocationButton extends React.Component {
  render() {
    return (
      <Button
          onPress={()=>Actions.checkinComplete({venue:this.props.name})}
      >
          {this.props.name}
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },

});