import { Dimensions, StyleSheet } from 'react-native'
let screen = Dimensions.get('window')
export default StyleSheet.create({
  containerPopUp: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: 'white',
    borderRadius: 20,
  }, popUpTransparent: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  }, popUpImage: {
    width: 120,
    height: 120,
  }, topImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, popUpImageBack: {
    backgroundColor: '#F8F8F7',
    width: 120,
    height: 120,
    borderRadius: 45,
  }, buttonNext: {
    backgroundColor: '#F65973',
    width: screen.width - 140,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }, textNext: {
    margin: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }, textSkip: {
    margin: 10,
    color: '#F65973',
    fontSize: 24,
    fontWeight: 'bold'
  }, textWelcome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40
  }, textIntro: {
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    marginTop: 40,
  }
})
