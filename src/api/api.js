import axios from 'axios'

export const Get = () => {
  return axios.request({
    method: 'get',
    url: 'http://106.12.179.139:8801/host'
  })
}

export const Post = (Data) => {
  return axios.request({
    headers: {
      'content-type': 'application/json'
    },
    method: 'post',
    url: 'http://106.12.179.139:8801/host',
    data: {
      Data

    }
  })
}
