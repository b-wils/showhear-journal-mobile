import React, {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

var testArtists = ['Hikes', 'Boyfrndz', 'Chipper Jones'];

export default class CheckinComplete extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          We've checked you into {this.props.venue}
        </Text>
        <Text style={styles.welcome}>
          The bands tonight are:
        </Text>
        { testArtists.map(function(item) {
                return <ArtistButton name={item} key={item}/>
            })
        }
      </View>
    );
  }
}

class ArtistButton extends React.Component {
  render() {
    return (
      <Button
          onPress={Actions.checkinInit}
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
});