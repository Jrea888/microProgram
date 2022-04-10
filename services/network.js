import {BaseURL,timeout} from './config.js'

export function request(option){

  return new Promise((resolve,reject) => {
    wx.request({
      url: BaseURL + option.url,
      timeout:timeout,
      data:option.data,
      success:function(res){
        resolve(res.data)
      },
      fail:reject
    })
  })
} 
