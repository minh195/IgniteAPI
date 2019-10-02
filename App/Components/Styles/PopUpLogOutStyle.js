import { Dimensions, Platform, StyleSheet } from 'react-native'
let screen = Dimensions.get('window');
export default StyleSheet.create({
  containerPopUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 20,
    shadowRadius: 10,
    width: screen.width - 90,
    height: 500,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 150,
    marginBottom: 150,
    backgroundColor: 'white',
  },
  popUpTransparent: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  popUpImage: {
    width: 120,
    height: 120,
    borderRadius: 45
  },
  topImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonNext: {
    marginTop: 30,
    backgroundColor: '#F65973',
    width: screen.width - 140,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSkip: {},
  textNext: {
    margin: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textSkip: {
    margin: 10,
    color: '#F65973',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textWelcome: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40
  },
  textIntro: {
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    marginTop: 40,
  }
})
