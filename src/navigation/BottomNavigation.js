import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import Screen4 from '../screens/Screen4'
import DetailsScreen1 from '../screens/DetailsScreen1';

//create tab s1,2 in drawer bottomTab
const stackScreen1 = createStackNavigator ({
    Screen1: {
        screen: Screen1
    },
    Details: {
        screen: DetailsScreen1
    }
})

export const TabNavigator1 = createBottomTabNavigator({
    S1: stackScreen1,
    S3: Screen3
})

export  const TabNavigator2 = createBottomTabNavigator({
    S2: Screen2,
    S4: Screen4
})
