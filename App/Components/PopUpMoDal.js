import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styles from './Styles/PopUpMoDalStyle'
import {
  Text,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native'
import { Images } from '../Themes'

export default class PopUpMoDal extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
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
      <Modal
        ref={'myModal'}
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
              <Text style={styles.textWelcome}>
                Welcome to PayLah!
              </Text>
              <Text style={styles.textIntro}>
                Here's a quick overview to get you started
              </Text>
              <TouchableOpacity
                style={styles.buttonNext}
                onPress={this.hideModal}>
                <Text style={styles.textNext}>
                  LET'S GO
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.hideModal}>
                <Text style={styles.textSkip}>
                  SKIP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
