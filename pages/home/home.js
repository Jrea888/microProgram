
// page/home/home.js
import {getBannerData,getGoodsList} from '../../services/home.js'
import {POP,NEW,SELL} from '../../common/const'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannersImage:[],
    recommends:[],
    titles: ["流行", "新款", "精选"],
    currentType:'pop',
    currentIndex:0,
    goods:{
      [POP]:{page: 1, list: []},
      [NEW]:{page: 1, list: []},
      [SELL]:{page: 1, list: []}
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData()
  },
  _getData(){
    this._getBannerList();
    this._getTabSwitchData(POP);
    this._getTabSwitchData(NEW);
    this._getTabSwitchData(SELL);

  },
  _getBannerList(){
    getBannerData().then(res => {
      console.log(res,"-----轮播图数据")
      const banners = res.data.banner.list.map(item => {
        return item.image
      })

      this.setData({
        bannersImage:banners,
        recommends: res.data.recommend.list
      })
    })
  },
  _getTabSwitchData(type){
    let params = {
      type:type,
      page:this.data.goods[type].page
    }

    getGoodsList(params).then(res => {
      console.log(res,`-----${type}--goods数据`)
      let list = res.data.list;

      // 取出之前的数据
      let goods = this.data.goods;
      goods[type].page += 1;
      goods[type].list.push(...list)

      // 最新的page重新赋值给goods，下次进来直接获取第二页数，以此类推三、四
      this.setData({
        goods:goods
      })
    })
  },
  tabClickHandle(e){
    console.log(e.detail.index)
    this.setData({
      currentIndex:e.detail.index
    })
    let currentType = ''
    switch (e.detail.index) {
      case 0:
        currentType = POP;
        break;
      case 1:
        currentType = NEW;
        break;
      case 2:
        currentType = SELL;
        break;
    }

    this.setData({
      currentType:currentType
    })

    this.selectComponent('.tab-control').setCurrentIndex(e.detail.index)
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