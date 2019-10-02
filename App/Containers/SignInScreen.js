import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native'
import PopUpMoDal from '../Components/PopUpMoDal'
// Styles
import styles from './Styles/SignInScreenStyle'
import { Images } from '../Themes'

class SignInScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  _onChangeTextUser = (text) => this.setState({ text, username: text })
  _onChangeTextPassword = (text) => this.setState({ text, username: text })
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    await this.props.navigation.navigate('Drawer')
    await this.refs.addModal.showModal()
  }

  render () {
    return (
      <View style={styles.container}>
        <PopUpMoDal ref={'addModal'}/>
        <ImageBackground source={Images.backgroundLogin}
                         style={styles.imageBack}>
          <Text style={styles.appName}>Chat demo</Text>
        </ImageBackground>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon}
                 source={Images.idIcon}/>
          <TextInput style={styles.inputs}
                     placeholder="Email"
                     keyboardType="email-address"
                     underlineColorAndroid='transparent'
                     onChangeText={this._onChangeTextUser}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon}
                 source={Images.passwordIcon}/>
          <TextInput style={styles.inputs}
                     placeholder="Password"
                     secureTextEntry={true}
                     underlineColorAndroid='transparent'
                     onChangeText={this._onChangeTextPassword}/>
        </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
                          onPress={this._signInAsync}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.signInText}>Don't have an account?
            <Text style={styles.textSignUp}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SignInScreen
