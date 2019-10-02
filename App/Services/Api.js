import apisauce from 'apisauce'

let txt = "Hello"
console.log('fetch api')
// baseURL = `http://ghuntur.com/simsim.php?lc=${language}&deviceId=&bad0=&txt=${txt}`
const create = (baseURL = `http://ghuntur.com`) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // 10 second timeout...
    timeout: 10000
  })
  const getMess = (data) => api.get(
    `/simsim.php?lc=en&deviceId=&bad0=&txt=`,
    {
      lc: 'en',
      txt: data
    })
  return {
    getMess
  }
}

export default {
  create
}
