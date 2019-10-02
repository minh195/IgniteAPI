/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import GetMessageActions from '../Redux/GetMessageRedux'
// import { GetMessageSelectors } from '../Redux/GetMessageRedux'

export function * getMessage (api, action) {
  console.log(action)
  const { data } = action
  // get current data from Store
  // const currentData = yield select(GetMessageSelectors.getData)
  // make the call to the api
  const response = yield call(api.getMess, data)
console.log(response.data.trim())
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(GetMessageActions.getMessageSuccess(response.data.trim()))
  } else {
    yield put(GetMessageActions.getMessageFailure())
  }
}

// export function* addNewMovie(api, action) {
//   // make the call to the api
//   console.log(action.newMovie)
//   const response = yield call(api.getMes, action.newMovie)
//   let messageReceive = response.data.trim()
//   console.log(messageReceive)
//   if (response.ok) {
//     const receivedMovies = yield messageReceive
//     yield put({type: FETCH_SUCCEEDED, receivedMovies: receivedMovies});
//   }
// }


