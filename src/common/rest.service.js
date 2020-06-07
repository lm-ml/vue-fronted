import axios from 'axios'
const TIME_OUT_MS = 60 * 1000

export default {
  /*
   *'Content-Type': 'application/json; charset=UTF-8'
   */
  postJson(url, payload, callback, exception) {
    post(url, payload, callback, exception, {
      'Content-Type': 'application/json; charset=UTF-8'
    });
  },
  /*
  * 'Content-Type': 'application/x-www-form-urlencoded'
  */
  postForm(url, param, callback, exception) {
    post(url, param, callback, exception, {
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
}

function post(url, data, callback, exception, headers) {
  axios({
    method: 'post',
    url: url,
    data: data,
    timeout: TIME_OUT_MS,
    headers: headers
  }).then(
    (result) => {
      callback(handleResults(result))
    }
  ).catch(
    (error) => {
      if (exception) {
        exception(error)
      } else {
        console.log(error)
      }
    }
  )
}

/*
 * @param response 返回数据列表
 */
function handleResults(response) {
  let remoteResponse = response.data
  var result = {
    success: false,
    message: '',
    status: [],
    errorCode: '',
    data: {
      total: 0,
      results: []
    }
  }
  if (remoteResponse.success) {
    result.data.results = remoteResponse.data
    result.data.total = remoteResponse.total
    result.success = true
  }
  if (!remoteResponse.success) {
    let code = remoteResponse.errorCode
    if (code === 400) {
      console.log('传参错误')
    }
    result.errorCode = remoteResponse.errorCode
    result.message = remoteResponse.message
  }
  return result
} 
