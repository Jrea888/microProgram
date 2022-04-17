// pages/detail/detail.js
import {getDetailBanner,GoodsBaseInfo,ShopInfo,ParamInfo,getRecommends} from '../../services/detail.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    topBannerImages:[],
    baseInfo:{},
    shopInfo:{},
    detailInfo:{},
    paramInfo:{},
    commentInfo:{},
    recommends:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    this.setData({
      iid:options.iid
    })

    // 获取商品详情数据
    this._getGoodsDetialData();
    // 获取推荐数据
    this._getRecommends();
  },
  _getGoodsDetialData(){
    // 获取详情轮播图数据
    getDetailBanner(this.data.iid).then(res => { 
      const data = res.result;
      // 1.轮播图数据
      const topBannerImages = data.itemInfo.topImages
      // 2.通过对象收集商品基本信息
      const baseInfo = new GoodsBaseInfo(data.itemInfo,data.columns,data.shopInfo.services)
      // 3.收集商品信息
      const shopInfo = new ShopInfo(data.shopInfo);
      // 4.收集商品详情信息
      const detailInfo = data.detailInfo;
      // 5.收集商品参数信息
      const paramInfo = new ParamInfo(data.itemParams.info,data.itemParams.rule);
      // 6.获取评论信息
      let commentInfo = {}
      if(data.rate && data.rate.cRate > 0){
        commentInfo = data.rate.list[0]
      }

      this.setData({
        topBannerImages:topBannerImages,
        baseInfo:baseInfo,
        shopInfo:shopInfo,
        detailInfo:detailInfo,
        paramInfo:paramInfo,
        commentInfo:commentInfo
      })
      // console.log(topBannerImages,"-->topBannerImages")
      // console.log(baseInfo,"--->baseInfo")
      // console.log(shopInfo,"--->shopInfo")
      // console.log(detailInfo,"--->detailInfo")
      // console.log(paramInfo,"--->paramInfo")
      // console.log(commentInfo,"--->commentInfo")
    })
  },
  _getRecommends(){
    getRecommends().then(res => { 
      this.setData({
        recommends:res.data.list
      });
    })
    console.log(this.data.recommends)
  },
  onAddCart(){
    // 1.获取商品对象
    const obj = {}
    obj.iid = this.data.iid;
    obj.imageUrl = this.data.topBannerImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice;

    // 2.加入到购物车
    app.addToCart(obj)

    // 3.加入成功
    wx.showToast({
      title: '加入购入车成功',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})