import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5F7FB'
  }, elementHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  }, goBackIcon: {
    width: 20,
    height: 20
  }, dateMassage: {
    textAlign: 'center',
    marginTop: 10
  }, backgroundHeaderBar: {
    width: '100%',
    height: 60
  }, textName: {
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 20,
    padding: 15,
  }, content: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
  }, footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white'
  }, item: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'flex-end'
  }, avatarUser: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 40,
  }, textMessage: {
    margin: 2,
    padding: 10,
    color: 'white',
    backgroundColor: '#37B8B3',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
    fontSize: 16,
    width: 200
  }, timeMessage: {
    fontSize: 14,
    color: '#D7D7D7'
  }, reactIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }, textInput: {
    height: 50,
    width: 200
  }, send_icon: {
    width: 100,
    height: 60,
  }, item1: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'flex-start'
  }, avatarUser1: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 40,
  }, textMessage1: {
    margin: 2,
    padding: 10,
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    fontSize: 16,
    width: 200
  }, timeMessage1: {
    fontSize: 14,
    color: '#D7D7D7'
  },
})
