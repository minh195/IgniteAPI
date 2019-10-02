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
import { DetailScreen } from '../screenNames'
import PopUpMoDal from '../Components/PopUpMoDal'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignInScreenStyle'

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
    this.props.navigation.navigate('ChatScreen')
    this.refs.addModal.showModal()
  }
  _signUp = () => {
    this.refs.addModal.showModal()
  }

  render () {
    return (
      <View style={styles.container}>
        <PopUpMoDal ref={'addModal'}/>
        <ImageBackground source={Images.backgroundLogin}
                         style={styles.imageBack}>
          <Text style={styles.appName}>
            Chat demo
          </Text>
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
          <Text style={styles.loginText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}
                          onPress={this._signUp}>
          <Text style={styles.signInText}>
            Don't have an account?
            <Text style={styles.textSignUp}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
export default SignInScreen
