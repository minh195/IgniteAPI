import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  ImageBackground,
  AsyncStorage,
} from 'react-native'
import PopUpMoDal from '../Components/PopUpMoDal'
import Loading from '../Components/Loading'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatScreenStyle'
import { Images } from '../Themes'
import GetMessageTypes from '../Redux/GetMessageRedux'

class ChatScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [{
        type: 1,
        key: '1',
        id: 1,
        label: `I'm ok thanks for asking and you? It's been a long time since we've seen each other.`,
        receiveMes: ''
      }],
      text: '',
      loading: true,
      error: false,
      posts: '',
      data:''
    }
  }

  _onChangeText = (text) => this.setState({ text, item: text })
  submitAndClear = () => {
    this.setState({
      text: ''
    })
  }
  addItem = (value) => {
    this.props.onFetchMessage(value)
    if (this.state.text === '') {
      alert('Type a message!!')
    } else {
      let { items } = this.state
      // Give convert our item to an object then push to our current items (array)
      let item = {
        key: 'aKey',// give it a unique key
        id: items[items.length - 1].id++, // get the last id of our items and increment it(i.e +1)
        type: 1,
        label: value
      }
      items.push(item) // add our new item
      // set our items to the state to update it
      Keyboard.dismiss()
      this.submitAndClear()

      this.HandleReceiveMessage(value).then()
    }
  }
  HandleReceiveMessage = async (value) => {
    let txt = value
    let language = 'en'
    let { items } = this.state
    let item = {
      type: 3,
      key: 'aKey',// give it a unique key
      id: items[items.length - 1].id++, // get the last id of our items and increment it(i.e +1)
    }
    items.push(item) // add our new item
    try {
      const response = await fetch(`http://ghuntur.com/simsim.php?lc=${language}&deviceId=&bad0=&txt=${txt}`,
        {
          method: 'GET',
        })
      let posts = await response.text()//with any line with space
      let item = {
        type: 2,
        key: 'aKey',// give it a unique key
        id: items[items.length - 1].id++, // get the last id of our items and increment it(i.e +1)
        receiveMes: posts.trim()//remove line space
      }
      items.push(item) // add our new item
      this.setState({ loading: false })
    } catch (e) {
      this.setState({ loading: false, error: true })
    }
    let _lengthItems = this.state.items.length
    this.state.items.splice(_lengthItems - 2, 1)
  }
  renderItem = ({ item }) => {
    let { label, receiveMes, type } = item
    const { error } = this.state
    if (error) {
      return (
        <View style={styles.center}>
          <Text>Failed to load message!</Text>
        </View>
      )
    }
    if (type === 1) {
      return (
        <View style={styles.item}>
          <View>
            <Text style={styles.textMessage}>
              {label}
              <Text style={styles.timeMessage}>
                {'\n'}12:23 PM
              </Text>
              <Text> ✓</Text>
            </Text>
          </View>
          <Image style={styles.avatarUser}
                 source={Images.myAvatar}/>
        </View>
      )
    }
    if (type === 3) {
      return (
        <Loading/>
      )
    } else {
      return (
        <View style={styles.item1}>
          <Image style={styles.avatarUser1}
                 source={Images.avatarUser}/>
          <Text style={styles.textMessage1}>
            {receiveMes}
            <Text style={styles.timeMessage1}>{'\n'}01:22 PM</Text>
          </Text>
        </View>
      )
    }
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
    )
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('SignInScreen')
  }

  render () {
    //const { navigation } = this.props
    console.disableYellowBox = true
    let { items, item } = this.state
    console.log(this.props.messages.payload)
    return (
      <View style={styles.container}>
        <PopUpMoDal ref={'addModal'}/>
        <View style={styles.header}>
          <ImageBackground source={Images.backgroundHeaderBar}
                           style={styles.backgroundHeaderBar}>
            <View style={styles.elementHeader}>
              <TouchableOpacity onPress={this._signOutAsync}>
                <Image source={Images.goBack}
                       style={styles.goBackIcon}/>
              </TouchableOpacity>
              <View>
                <Text style={styles.textName}>Johny</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <Text style={styles.dateMassage}>TODAY</Text>
          <FlatList
            data={items}
            keyExtractor={(item, index) => item.key}
            renderItem={this.renderItem}
            ref={ref => this.flatList = ref}
            onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
            onLayout={() => this.flatList.scrollToEnd({ animated: true })}/>
        </View>
        <View style={styles.footer}>
          <View style={styles.reactIcon}>
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20, margin: 5 }}
                     source={Images.addIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 25, height: 25, margin: 5 }}
                     source={Images.smileIcon}/>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput style={styles.textInput}
                       placeholder={'Type a massage...'}
                       onChangeText={this._onChangeText}
                       value={this.state.text}/>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.addItem(item)}>
              <Image source={Images.sendIcon}
                     style={styles.send_icon}/>
            </TouchableOpacity>
          </View>
        </View>
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
// export default ChatScreen
const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMessage: (data) => {
      console.log('action fetch')
      dispatch(GetMessageTypes.getMessageRequest(data))
    },
  }
}
const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatScreen)
export default Chat
