import React, { Component } from 'react'
import {
  View,
  Dimensions,
} from 'react-native'
import { createDrawerNavigator, DrawerActions } from 'react-navigation'
import Chat from '../Containers/ChatScreen'
import RoomChatScreen from '../Containers/RoomChatScreen'
import CustomSidebarMenu from './CustomSidebarMenu'

global.currentScreenIndex = 0

class NavigationDrawerStructure extends Component {
  constructor (props) {
    super(props)
  }

  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }

  render () {
    return (
      <View style={{ flexDirection: 'row' }}>
      </View>
    )
  }
}

const DrawerNavigatorExample = createDrawerNavigator(
  {
    NavScreen1: {
      screen: Chat,
    },
    NavScreen2: {
      screen: RoomChatScreen,
    }
  },
  {
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
    initialRouteName: 'NavScreen1'
  }
)
export default DrawerNavigatorExample

