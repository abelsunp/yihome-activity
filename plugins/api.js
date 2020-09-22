import axios from 'axios'
import axiosService from './axioss.js'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

var baseURL = 'http://47.100.186.108:6898/admin';
  baseURL = 'https://inyihome.com/admin';
  // baseURL = 'http://192.168.1.223:8080/admin';
  // baseURL = 'http://192.168.1.223:8080/admin';
// if(process.browser){
// 	if (window.location.host === 'www.inyihome.com') {
// 		baseURL = 'https://www.inyihome.com'
// 	}
// 	if (window.location.host === 'www.inyihome.com:10045') {
// 	  baseURL = 'http://www.inyihome.com:10045'
// 	}
// } 


axios.defaults.baseURL = baseURL;


// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    //config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res
  } else {
    return Promise.reject(res)
  }
}, (error) => {
  return Promise.reject(error)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const request = {
  // insertuserinfo:(postData) => fetch('/user/insertuserinfo',postData),
  // fileUpload:(postData) => fetch('/uploaduntil/uploadImg',postData),
  // earlyBirdSubmit:(postData) => fetch('/front/savebasicneed',postData),
  // savehelptickets:(postData) => fetch('/front/savehelptickets',postData),
  // linkAdd:(postData)=> fetch('/user/users/linkAdd',postData),
  getLinkUser:(postData)=> fetch('/user/users/getLinkUser?userId='+postData),

  // getLinkUser:(data) => {
  //   let config = {
  //     url: `/admin/user/users/linkAdd`,
  //     data,
  //     method: 'post',
  //   };
  //   return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  // },

  linkAdd:(data) => {
    let config = {
      url: `/admin/user/users/linkAdd`,
      data,
      method: 'post',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },


};


export default ({ app }, inject) => {
  inject('request', request)
}

// export function base(){
// 	return baseURL;
// } 

