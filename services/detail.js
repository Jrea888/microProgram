import {request} from './network.js';

export function getDetailBanner(iid){
  return request({
    url:'/detail',
    data:{
      iid
    }
  })
}

export function getRecommends(){
  return request({
    url:'/recommend'
  })
}

export class GoodsBaseInfo{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services
  }
}

export class ShopInfo{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class ParamInfo{
  constructor(info,rule){
    this.image = info.images ? info.images[0]:'';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
