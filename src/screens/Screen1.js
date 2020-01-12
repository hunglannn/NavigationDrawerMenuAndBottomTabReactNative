import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default class Screen1 extends Component {
  gotoScreen(object){
    this.props.navigation.navigate(object.screenName)

  }
  render() {
    return (
      <View>
        <Text> Screen1 </Text>
        <TouchableOpacity
          onPress = {() => this.gotoScreen({screenName: 'Details', data: 'Hello World'})}>
          <Text>Go to Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
