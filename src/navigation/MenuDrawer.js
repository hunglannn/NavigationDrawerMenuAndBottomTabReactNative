import React, {Component} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';

 class MenuDrawer extends Component {
 goScreen (screen) {
   this.props.navigation.navigate(screen)
 }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress = {() => this.goScreen('BottomTab1')}>
          
          <Text>Go to BottomTab1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {() => this.goScreen('BottomTab2')}>
          <Text>Go to BottomTab2    </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuDrawer
