import { createStackNavigator, createAppContainer } from 'react-navigation'
import TestApiScreen from '../Containers/TestApiScreen'
import SignInScreen from '../Containers/SignInScreen'
import ChatScreen from '../Containers/ChatScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TestApiScreen: { screen: TestApiScreen },
  SignInScreen: { screen: SignInScreen },
  ChatScreen: { screen: ChatScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ChatScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
