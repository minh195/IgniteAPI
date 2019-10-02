import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, textSignUp: {
    color: 'blue'
  }, imageBack: {
    flex: 1,
    marginBottom: 20,
    height: '80%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }, appName: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 40,
    marginBottom: 100,
    fontWeight: 'bold'
  }, inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black', borderWidth: 1
  }, inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  }, inputIcon: {
    width: 16,
    height: 16,
    marginLeft: 15,
    justifyContent: 'center'
  }, buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  }, forgotText: {
    fontSize: 13,
    color: 'hotpink'
  }, loginButton: {
    backgroundColor: '#CB5D9A',
  }, loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }, signInText: {
    fontSize: 12
  }
})
