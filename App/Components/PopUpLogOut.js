import React, { Component } from 'react'
import styles from './Styles/PopUpLogOutStyle'
import { Images } from '../Themes'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native'

export default class PopUpLogOut extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  showModal = () => {
    this.setModalVisible(true)
  }
  _handleDisablePopUp = () => {
    this.setModalVisible(!this.state.modalVisible)
  }
  _handleLogOut = () => {
    this.props.logout()
  }

  render () {
    return (
      <Modal ref={'myModal1'}
             transparent={true}
             visible={this.state.modalVisible}>
        <View style={styles.popUpTransparent}>
          <View style={styles.containerPopUp}>
            <View style={styles.topImage}>
              <Image source={Images.seeYou}
                     style={styles.popUpImage}/>
              <Text style={styles.textWelcome}>Bạn có muốn đăng xuất?</Text>
              <TouchableOpacity style={styles.buttonNext}
                                onPress={this._handleLogOut}>
                <Text style={styles.textNext}>Đồng ý</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSkip}
                                onPress={this._handleDisablePopUp}>
                <Text style={styles.textSkip}>Hủy bỏ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}


