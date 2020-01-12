import {createDrawerNavigator} from 'react-navigation-drawer';
import MenuDrawer from './MenuDrawer';
import {TabNavigator1, TabNavigator2} from './BottomNavigation';

export default DrawerNavigator = createDrawerNavigator(
  {
    BottomTab1: {
      screen: TabNavigator1,
    },
    BottomTab2: {
      screen: TabNavigator2,
    },
  },
  {
    contentComponent: MenuDrawer,
    drawerWidth: 300,
  },
);
