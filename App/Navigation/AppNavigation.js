import { createStackNavigator, createAppContainer } from 'react-navigation'
import RoomChatScreen from '../Containers/RoomChatScreen'
import TestApiScreen from '../Containers/TestApiScreen'
import SignInScreen from '../Containers/SignInScreen'
import ChatScreen from '../Containers/ChatScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import DrawerNavigatorExample from '../Components/DrawerNav'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SignInScreen: { screen: SignInScreen },
  RoomChatScreen: { screen: RoomChatScreen },
  TestApiScreen: { screen: TestApiScreen },
  ChatScreen: { screen: ChatScreen },
  LaunchScreen: { screen: LaunchScreen },
  Drawer: { screen: DrawerNavigatorExample}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SignInScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
