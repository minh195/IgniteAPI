import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import TestApiScreen from '../Containers/TestApiScreen'
import createStore from '../Redux'
import RootContainer from './RootContainer'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer/>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
// import '../Config'
// import DebugConfig from '../Config/DebugConfig'
// import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import RootContainer from './RootContainer'
// import createStore from '../Redux'
//
// // create our store
//
// /**
//  * Provides an entry point into our application.  Both index.ios.js and index.android.js
//  * call this component first.
//  *
//  * We create our Redux store here, put it into a provider and then bring in our
//  * RootContainer.
//  *
//  * We separate like this to play nice with React Native's hot reloading.
//  */
//
//
// import allReducers from './reducers';
// import MovieContainer from './containers/MovieContainer';
// //Redux saga
//
// import root from '../Sagas/index'
// import createSagaMiddleware from 'redux-saga';
//
// const sagaMiddleware = createSagaMiddleware();
//
// let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
// const App = () => (
//   <Provider store={store}>
//     <MovieContainer />
//   </Provider>
// );
// sagaMiddleware.run(root);
// export default App

