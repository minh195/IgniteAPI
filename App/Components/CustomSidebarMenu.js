import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

import styles from './Styles/CustomSidebarMenuStyle'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DrawerActions } from 'react-navigation'
import PopUpLogOut from './PopUpLogOut'

export default class CustomSidebarMenu extends Component {
  constructor (props) {
    super(props)
    this.items = [
      {
        navOptionThumb: 'snapchat',
        navOptionName: 'Chat',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: 'wechat',
        navOptionName: 'Room chat',
        screenToNavigate: 'NavScreen2',
      },
    ]
  }

  _signOutAsync = async () => {
    await this.props.navigation.dispatch(DrawerActions.closeDrawer())
    await this.refs.addModal1.showModal()
  }

  _HandleLogOut = async () => {
    await AsyncStorage.clear()
    await this.props.navigation.navigate('SignInScreen')
  }

  render () {
    return (
      <View style={styles.sideMenuContainer}>
        <Image source={Images.avatarDrawer}
               style={styles.sideMenuProfileIcon}/>
        <View style={styles.divider}/>
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View style={[styles.itemContainer,
              { backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff' }]}
                  key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color={'#747375'}/>
              </View>
              <Text style={[styles.navigationName,
                { color: global.currentScreenIndex === key ? 'red' : 'black' }]}
                    onPress={() => {
                      global.currentScreenIndex = key
                      this.props.navigation.navigate(`${item.screenToNavigate}`)
                    }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonLogOut}>
          <TouchableOpacity onPress={this._signOutAsync}>
            <Icon size={30}
                  color={'red'}
                  name='sign-out'/>
          </TouchableOpacity>
        </View>
        <PopUpLogOut logout={this._HandleLogOut} ref={'addModal1'}/>
      </View>
    )
  }
}
