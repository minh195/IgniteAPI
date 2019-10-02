import React, { Component } from 'react'
import styles from './Styles/PopUpMoDalStyle'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native'
import { Images } from '../Themes'

export default class PopUpMoDal extends Component {
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
  hideModal = () => {
    this.setModalVisible(!this.state.modalVisible)
  }

  render () {
    return (
      <Modal ref={'myModal'}
             transparent={true}
             visible={this.state.modalVisible}
             animated={true}>
        <View style={styles.popUpTransparent}>
          <View style={styles.containerPopUp}>
            <View style={styles.topImage}>
              <View style={styles.popUpImageBack}>
                <Image source={Images.popUp}
                       style={styles.popUpImage}/>
              </View>
              <Text style={styles.textWelcome}>Welcome to PayLah!</Text>
              <Text style={styles.textIntro}>Here's a quick overview to get you started</Text>
              <TouchableOpacity style={styles.buttonNext}
                                onPress={this.hideModal}>
                <Text style={styles.textNext}>LET'S GO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.hideModal}>
                <Text style={styles.textSkip}>SKIP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
