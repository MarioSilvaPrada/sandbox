/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, TouchableHighlight, ScrollView, FlatList, ImageBackground } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap dcscR on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: 0,
      isLoading: true,
      dataSource: 'olá'
    };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentDidMount() {
    return fetch('https://swapi.co/api/films')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson.results)

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={require('./android/app/src/bread.jpeg')} style={{ width: '100%', height: '100%' }}>
          <Text style={styles.welcome}>Just Baked</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => <Text>{item.title}, {item.opening_crawl}</Text>}
            keyExtractor={(item, index) => item.episode_id}
            style={{ color: 'white' }}
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({ text })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>

          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
            color="#c40b13"
          />

          <TouchableHighlight onPress={this.onPress} style={styles.button, styles.square}  >
          <Text style={styles.button}>Touch Here</Text>
        </TouchableHighlight>
        <Text style={{ color: 'white' }}> {this.state.count !== 0 ? this.state.count : null} </Text>

        <ScrollView>
          <Text style={{ fontSize: 96, color: 'white' }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96, color: 'white' }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96, color: 'white' }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96, color: 'white' }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96, color: 'white' }}>Scroll me plz</Text>
        </ScrollView>
        </ImageBackground>
        
      </View >
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fe7cc',
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
  square: {
    margin: 20,
    width: 300,
    height: 50,
    borderRadius: 4,
    borderWidth: 5.5,
    borderColor: '#e16262',
    backgroundColor: '#f8b739',
    alignItems: 'center',
    padding: 10
  },

});
