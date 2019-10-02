import React, { Component } from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/TestApiScreenStyle'
import { TouchableOpacity } from 'react-native'
import Button from 'react-native-button'
import {
  Text, View, Platform, TextInput, FlatList
} from 'react-native'
import GetMessageTypes from '../Redux/GetMessageRedux'

class TestApiScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  render () {
    console.log(this.props.messages.payload)
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
        <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
          Redux Saga tutorials - Movies list
        </Text>
        <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
          New movie information
        </Text>
        <View style={{ height: 100, margin: 10 }}>
          <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                     onChangeText={(text) => this.setState({ data: text })}
                     value={this.state.title}
                     placeholder='Enter new movie name'
          />
        </View>
        <View style={{ height: 70, flexDirection: 'row' }}>
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet'
            }}
            style={{ fontSize: 18, color: 'white' }}
            onPress={() => {
              //this.props.
            this.props.navigation.navigate('SignInScreen')
            }}>
            <Text>Fetch movies</Text>
          </Button>
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet'
            }}
            style={{ fontSize: 18, color: 'white' }}
            onPress={() => {
              const { data } = this.state
              if (!data.length) {
                alert('You must enter movie name')
                return
              }
              this.props.onFetchMessage(data)
            }}>
            <Text>Add Movie</Text>
          </Button>
        </View>
        {/*<View>*/}
        {/*  <Text>{this.props.messages}</Text>*/}
        {/*</View>*/}

        <FlatList
          data={this.props.messages.payload}
          //keyExtractor={(item) => item.id}
          renderItem={({item, index}) => <Text style={{
            padding: 10,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
            backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
          }}>
            {this.props.messages.payload}
          </Text>
          }
        />
      </View>
    )
  }
}

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
const TestAPI = connect(mapStateToProps, mapDispatchToProps)(TestApiScreen)
export default TestAPI

