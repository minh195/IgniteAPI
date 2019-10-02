import React, {Component} from 'react'
import {
  View,
  ActivityIndicator,
  Image,
} from 'react-native'
import {Images} from '../Themes'
import styles from './Styles/LoadingStyle'
export default class Loading extends Component {
  render() {
    return (
      <View style={styles.item1}>
        <Image
          style={styles.avatarUser1}
          source={Images.avatarUser}/>
        <View style={styles.textMessage1}>
          <ActivityIndicator animating={true}/>
        </View>
      </View>
    );
  }
}
