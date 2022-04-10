import {request} from './network.js';

export function getBannerData(){
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsList(data){
  return request({
    url:'/home/data',
    data:data
  })
}